import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../services/loginService.service";
import { Route, Router } from "@angular/router";
@Component({
    selector: 'org-login-component',
    templateUrl: './org_login.component.html',
    styleUrls: ['./org_login.component.css']
})
export class OrganizationLoginComponent implements OnInit {

    loginFormGroup: FormGroup = new FormGroup({});
    invalidCred: boolean = false;
    constructor(private formBuilder : FormBuilder, private loginService : LoginService, private router : Router) {
        this.buildLoginForm();
    }

    ngOnInit(): void {
        
    }

    buildLoginForm(): void {
        this.loginFormGroup = this.formBuilder.group({
                organization_email      :   ['', Validators.required],
                organization_password   :   ['', Validators.required]
            }
        )
    }

    async submitLoginForm(orgDetails : any) {
        try {
            console.log(orgDetails);
            let orgLoginServerResponse : any = await this.loginService.organizationLogin(orgDetails);
            if(orgLoginServerResponse.status_code != 200) {
                this.invalidCred = true;
                setTimeout(() => {
                    this.invalidCred = false;
                }, 2000);
            } else {
                localStorage.setItem("user_details", JSON.stringify(orgLoginServerResponse.data));
                this.router.navigate(["/organization/dashboard"]);
            }
        }catch(e) {
            console.log("==== err ====");
            console.log(e);
            throw e;
        }
    }
}
