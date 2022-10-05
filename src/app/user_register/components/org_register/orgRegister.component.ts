// organization registration 
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from "@angular/forms";
import { AddressDetailsFetch } from "src/app/services/address-details-fetch.service";
import { RegistrationService } from "../../services/registration.service";
@Component({
    selector: 'org-registration-component',
    templateUrl: './orgRegister.component.html',
    styleUrls: ['./orgRegister.component.css'],
    providers: [AddressDetailsFetch, RegistrationService]
})
export class OrganizationRegisterComponent implements OnInit {
    // orgName:      FormControl = new FormControl("");
    // orgAddress:   FormControl = new FormControl("");
    // orgCountry:   FormControl = new FormControl("");
    // orgState:     FormControl = new FormControl("");
    // orgCity:      FormControl = new FormControl("");
    // orgPhone:     FormControl = new FormControl("");
    // orgEmail:     FormControl = new FormControl("");
    // orgPassword:  FormControl = new FormControl("");
    orgFormGroup: FormGroup   = new FormGroup({});
    countryList:any = [];
    stateList: any = [];
    cityList: any = [];
    registrationError: boolean = false;
    message: string = "";

    constructor(private addressDetailsFetch: AddressDetailsFetch, private registrationService : RegistrationService,
        private formBuilder: FormBuilder) {
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
            if(res.status == 200) {
                console.log("----- success ----");
                this.registrationError = false;
                this.message = "";
            } else {
                console.log("----- Failed ------");
                this.registrationError = true;
                this.message = res.message;
                setTimeout(()=>{ // remove alert in 3 seconds. 
                    this.registrationError = false;
                    this.message = ""; 
                }, 3000);
            }
        });
    }
}