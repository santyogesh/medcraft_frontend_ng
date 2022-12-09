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

    countyChanged($event : any) : void {
        this.addressDetailsFetch.getStateList($event.target.value).then((lst) => {
            this.stateList = lst;
        });
    }

    stateChanged($event : any, hospital_details : any) : void {
        this.addressDetailsFetch.getCityList(hospital_details.hospital_country, $event.target.value).then((lst) => {
            this.cityList = lst;
        })
    }
}