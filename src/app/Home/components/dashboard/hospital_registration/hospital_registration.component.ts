import { Component, OnInit } from "@angular/core";
import { FormBuilder,FormControl, FormGroup, Validators } from "@angular/forms";
import { AddressDetailsFetch } from "src/app/services/address-details-fetch.service";

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

    constructor(private formBuilder : FormBuilder, private addressDetailsFetch : AddressDetailsFetch) {
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
            hospital_city     : ['', Validators.required]
        });
    }

    registerHospitalFormSubmit(hospitalDetils : any) {
        console.log("================================");
        console.log(hospitalDetils);
        console.log("================================");
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