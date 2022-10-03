// organization registration 
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AddressDetailsFetch } from "src/app/services/address-details-fetch.service";

@Component({
    selector: 'org-registration-component',
    templateUrl: './orgRegister.component.html',
    styleUrls: ['./orgRegister.component.css'],
    providers: [AddressDetailsFetch]
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

    constructor(private addressDetailsFetch: AddressDetailsFetch) {
        addressDetailsFetch.getCountyList().then((lst) => {console.log(lst);this.countryList = lst});
    }

    ngOnInit(): void {
        this.orgFormGroup = new FormGroup({
            organization_name:      new FormControl(""),
            organization_address:   new FormControl(""),
            organization_country:   new FormControl(""),
            organization_state:     new FormControl(""),
            organization_city:      new FormControl(""),
            organization_phone:     new FormControl(""),
            organization_email:     new FormControl(""),
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

    async submitOrgRegForm(orgDetails: any) {
        console.log(orgDetails);
    }


}


/**
 * {
  "organization_name": "string",
  "organization_address": "string",
  "organization_country": "string",
  "organization_state": "string",
  "organization_city": "string",
  "organization_phone": "string",
  "organization_email": "string",
  "organization_password": "string"
}
 */