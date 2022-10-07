import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'org-login-component',
    templateUrl: './org_login.component.html',
    styleUrls: ['./org_login.component.css']
})
export class OrganizationLoginComponent implements OnInit {

    constructor(private formBuilder : FormBuilder) {

    }

    ngOnInit(): void {
        
    }
}