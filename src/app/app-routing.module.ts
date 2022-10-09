import { Routes, RouterModule } from '@angular/router'; 
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/components/home/home.compoennt';
import { OrganizationRegisterComponent } from './user_register/components/org_register/orgRegister.component';
import { OrgDashBoard } from './Home/components/dashboard/org_dashboard/org_dashboard.component';
import { OrganizationLoginComponent } from './login/org_login/org_login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'org_signup',
        component: OrganizationRegisterComponent
    }, 
    {
        path: 'organization/dashboard',
        component: OrgDashBoard
    }, 
    {
        path: 'org_login',
        component: OrganizationLoginComponent
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