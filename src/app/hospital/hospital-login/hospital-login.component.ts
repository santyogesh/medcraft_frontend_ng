import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestAPIServices } from "../services/resapi-services.service";
@Component({
    selector : 'hospital-login',
    templateUrl : './hospital-login.component.html',
    styleUrls : ['./hospital-login.component.css']
})
export class HospitalLoginComponents implements OnInit {
    
    flag: boolean = false;
    msg: string = "";

    hospitalLoginFormGroup : FormGroup = new FormGroup({});
    
    constructor(private formBuilder : FormBuilder, private restApiService : RestAPIServices) {
        this.constructHospitalLoginForm();
    }

    ngOnInit(): void {
        
    }

    constructHospitalLoginForm() : void {
        this.hospitalLoginFormGroup = this.formBuilder.group({
            hospital_name        : ['', Validators.required],
            hospital_password    : ['', Validators.required]
        })
    }

    async hospitalLoginFormSubmit(hospitalLoginDetails : any) {
        console.log(hospitalLoginDetails);
        let res : any = await this.restApiService.hospitalLogin(hospitalLoginDetails);
        console.log(res);
        if(res.status_code == 200) {
            localStorage.setItem("hospital_details", JSON.stringify(res.data));
        } else {
            this.flag = true;
            this.msg = "Invalid Credentials";
            setTimeout(() => {
                this.flag = false;
                this.msg = "";
            }, 2000);
        }
    }
}