import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'patient-registration',
    templateUrl: './patient_registration.component.html',
    styleUrls: ['./patient_registration.component.css']
})
export class PatientRegistration implements OnInit {
    patientRegistrationValue: number = -1;
    patientRegitrationForm: FormGroup = new FormGroup({});

    constructor(private formBuilder : FormBuilder) {
        this.buildForm();
    }

    ngOnInit(): void {
        
    }

    onChangePatientType($event : any) : void {
        this.patientRegistrationValue = $event.target.value;
    }

    buildForm() : void {
        this.patientRegitrationForm = this.formBuilder.group({
            patient_type        :   ['', Validators.required],
            patient_name        :   ['', Validators.required],
            patient_address     :   ['', Validators.required],
            doctor_name         :   ['', Validators.required],
            patient_phone       :   ['', Validators.required],
            patient_uid         :   ['', Validators.required],
            patient_dept        :   ['', Validators.required]
        });
    }

    submitPatientForm(patient_details : any) : void {
        console.log(patient_details);
        if(patient_details['patient_type'] )
        for(let key in patient_details) {
            console.log(key);
            console.log(patient_details[key]);
        }
    }
}
