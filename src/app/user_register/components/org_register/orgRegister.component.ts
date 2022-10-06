// organization registration 
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from "@angular/forms";
import { AddressDetailsFetch } from "src/app/services/address-details-fetch.service";
import { RegistrationService } from "../../services/registration.service";
import { Router } from '@angular/router';
@Component({
    selector: 'org-registration-component',
    templateUrl: './orgRegister.component.html',
    styleUrls: ['./orgRegister.component.css'],
    providers: [AddressDetailsFetch, RegistrationService]
})
export class OrganizationRegisterComponent implements OnInit {
    orgFormGroup: FormGroup   = new FormGroup({});
    countryList:any = [];
    stateList: any = [];
    cityList: any = [];
    registrationError: boolean = false;
    message: string = "";

    constructor(private addressDetailsFetch: AddressDetailsFetch, private registrationService : RegistrationService,
        private formBuilder: FormBuilder, private router: Router) {
        addressDetailsFetch.getCountyList().then((lst) => {console.log(lst);this.countryList = lst});
            this.buildOrgRegistrationForm();
    }

    ngOnInit(): void {
    }

    buildOrgRegistrationForm() {
        this.orgFormGroup = this.formBuilder.group({
            organization_name:      ["", Validators.required],
            organization_address:   ["", Validators.required],
            organization_country:   ["", Validators.required],
            organization_state:     ["", Validators.required],
            organization_city:      ["", Validators.required],
            organization_phone:     ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
            organization_email:     ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            organization_password:  new FormControl("")
        });    
    }

    countryChanged($event: any): void {
        this.addressDetailsFetch.getStateList($event.target.value)
        .then((lst: any) => {
            this.stateList = lst;
        }); 
        this.cityList = [];
    }

    stateChange($event: any, details: any): void {
        this.addressDetailsFetch.getCityList(details.organization_country, $event.target.value).then((lst : any) => {
            this.cityList = lst; 
        }); 
    }

    submitOrgRegForm(orgDetails: any) {
        console.log(orgDetails);
        this.registrationService.registerOrganization(orgDetails).then((res : any) => {
            console.log(res);
            if(res.status_code == 200) {
                this.registrationError = true;
                this.message = "Account has been created, redirecting to dashboard.";
                setTimeout(() => {
                    localStorage.setItem("email", res.data.email);
                    localStorage.setItem("access_token", res.data.access_token);
                    this.router.navigate(['/organization/dashboard']);
                }, 3000);
            } else {
                this.registrationError = true;
                this.message = res.message;
                setTimeout(()=>{
                    this.registrationError = false;
                    this.message = ""; 
                }, 5000);
            }
        });
    }
}