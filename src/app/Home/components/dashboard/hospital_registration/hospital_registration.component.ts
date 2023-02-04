import { Component, OnInit } from "@angular/core";
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";
import { AddressDetailsFetch } from "src/app/services/address-details-fetch.service";
import { RegistrationService } from "src/app/user_register/services/registration.service";

@Component({
    selector: 'hospital-registration',
    templateUrl: './hospital_registration.component.html',
    styleUrls: ['./hospital_registration.component.css']
})
export class HospitalRegistration implements OnInit {

    hospitalRegFormGroup: FormGroup = new FormGroup({});
    countryList: any = [];
    stateList: any = [];
    cityList: any = [];
    errorMsgFlag: boolean = false; 
    msg: string = "";
    sucessFlag: boolean = false;

    constructor(private formBuilder : FormBuilder, 
                private addressDetailsFetch : AddressDetailsFetch,
                private registartionService : RegistrationService) {
    }
    
    ngOnInit(): void {
        this.buildHospitalRegistrationForm();
        this.addressDetailsFetch.getCountyList().then((lst) => {
            this.countryList = lst;
        });
    }

    buildHospitalRegistrationForm(): void {
        this.hospitalRegFormGroup = this.formBuilder.group({
            hospital_name     : ['', Validators.required],
            hospital_addr     : ['', Validators.required],
            phone             : ['', Validators.required],
            hospital_country  : ['', Validators.required],
            hospital_state    : ['', Validators.required],
            hospital_city     : ['', Validators.required],
            hospital_pincode  : ['', Validators.required],
            hospital_password : ['', Validators.required]
        });
    }

    async registerHospitalFormSubmit(hospitalDetils : any) {
        console.log("================================");
        console.log(hospitalDetils);
        console.log("================================");
        for(let key in hospitalDetils) {
            console.log(key)
            if(hospitalDetils[key] == "") {
                this.errorMsgFlag = true;
                this.msg = "Please Specify All Fields";
                setTimeout(() => {
                    this.errorMsgFlag = false;
                    this.msg = "";
                }, 2000);
                return;
            }
        }

        let userDetails : any = localStorage.getItem("user_details");
        console.log(userDetails);
        userDetails = JSON.parse(userDetails);
        for(let key in userDetails) {
            hospitalDetils[key] = userDetails[key];
        }
        console.log("#############################################");
        console.log(hospitalDetils);
        console.log("###########################################");
        let httpResponse : any = await this.registartionService.hospitalRegistration(hospitalDetils);
        if(httpResponse.status_code == 200) {
            this.errorMsgFlag = false;
            this.sucessFlag = true;
            this.msg = "Hospital Registration SuccessFull";
            this.hospitalRegFormGroup.reset();
        } else {
            this.errorMsgFlag = true;
            this.sucessFlag = false;
            this.msg = "Some Error Occured";
        }
        setTimeout(() => {
            this.errorMsgFlag = false;
            this.sucessFlag = false;
        }, 2000);
    }


    countryChanged($event : any) : void {
        console.log($event.target.value);
        this.addressDetailsFetch.getStateList($event.target.value).then((lst : any) => {
            console.log("========== state List ===============");
            console.log(lst);
            this.stateList = lst;
            console.log(this.stateList);
        });
    }

    stateChanged($event : any, hospital_details : any) : void {
        this.addressDetailsFetch.getCityList(hospital_details.hospital_country, $event.target.value).then((lst) => {
            this.cityList = lst;
        })
    }
}