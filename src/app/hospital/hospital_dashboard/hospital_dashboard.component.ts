import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hospital-dashboard',
    templateUrl: './hospital_dashboard.component.html',
    styleUrls: ['./hospital_dashboard.component.css']
})
export class HospitalDashBoardComponent implements OnInit {
    
    registerDoctor: string = "Register Doctor";
    imageFileName: string = "hospital_logo.jpg";
    patientRegisterPanel: string = "Patient Register Panel";
    registerCommodity: string = "Register Commodity";
    patientReport: string = "Patients Details Report";

    ngOnInit(): void {
        
    }
}