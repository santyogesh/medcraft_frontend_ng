import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'org-dashbaord',
    templateUrl: './org_dashboard.component.html',
    styleUrls: ['./org_dashboard.component.css']
})
export class OrgDashBoard implements OnInit {
    
    hospitalRegistartion: string = "Hospital Regisration";
    hospitalListView: string = "View Hospital List";
    imageFileName: string = "hospital_logo.jpg";
    hospitalRegRouteLink: string = "/organization/hosptial/registartion";
    hospitalListViewRouteLink: string = "/organization/hospital/list";
    constructor() {
        
    }
    
    ngOnInit(): void {
        
    }
}