import { Routes, RouterModule } from '@angular/router'; 
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/components/home/home.compoennt';
import { OrganizationRegisterComponent } from './user_register/components/org_register/orgRegister.component';
import { OrgDashBoard } from './Home/components/dashboard/org_dashboard/org_dashboard.component';
import { OrganizationLoginComponent } from './login/org_login/org_login.component';
import { HospitalRegistration } from './Home/components/dashboard/hospital_registration/hospital_registration.component';
import { HospitalListView } from './Home/components/hospitallistview/hospitallistview.component';
import { HospitalLoginComponents } from './hospital/hospital-login/hospital-login.component';
import { HospitalDashBoardComponent } from './hospital/hospital_dashboard/hospital_dashboard.component';
import { PatientRegistration } from './hospital/patient_registration/patient_registration.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'org_signup',
        component: OrganizationRegisterComponent,
    },
    {
        path: 'organization/dashboard',
        component: OrgDashBoard,
    },
    {
        path: 'org_login',
        component: OrganizationLoginComponent
    },
    {
        path: 'organization/hosptial/registartion',
        component: HospitalRegistration
    }, 
    {
        path: 'organization/hospital/list',
        component: HospitalListView
    }, 
    {
        path : 'hospital/hospital_login',
        component: HospitalLoginComponents
    },
    {
        path: 'hospital/dashboard',
        component: HospitalDashBoardComponent
    },
    {
        path: 'hospital/patient_appointment',
        component: PatientRegistration
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}