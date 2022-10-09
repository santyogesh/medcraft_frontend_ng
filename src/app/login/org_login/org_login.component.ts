import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'org-login-component',
    templateUrl: './org_login.component.html',
    styleUrls: ['./org_login.component.css']
})
export class OrganizationLoginComponent implements OnInit {

    loginFormGroup: FormGroup = new FormGroup({});
    constructor(private formBuilder : FormBuilder) {
        this.buildLoginForm();
    }

    ngOnInit(): void {
        
    }

    submitLoginForm(orgLoginDetails : any): void {
        console.log(orgLoginDetails);
    }

    buildLoginForm(): void {
        this.loginFormGroup = this.formBuilder.group({
                organization_email      :   ['', Validators.required],
                organization_password   :   ['', Validators.required]
            }
        )
    }
}