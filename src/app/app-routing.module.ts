import { Routes, RouterModule } from '@angular/router'; 
import { NgModule } from '@angular/core';
import { HomeComponent } from './Home/components/home/home.compoennt';
import { OrganizationRegisterComponent } from './user_register/components/org_register/orgRegister.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, 
    {
        path: 'org_signup',
        component: OrganizationRegisterComponent
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