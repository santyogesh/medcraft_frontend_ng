import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/components/home/home.compoennt';
import { OrganizationRegisterComponent } from './user_register/components/org_register/orgRegister.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddressDetailsFetch } from './services/address-details-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './user_register/services/registration.service';
import { OrgDashBoard } from './Home/components/dashboard/org_dashboard/org_dashboard.component';
import { OrganizationLoginComponent } from './login/org_login/org_login.component';
import { HospitalRegistration } from './Home/components/dashboard/hospital_registration/hospital_registration.component';
import { OrgNavbarComponent } from './Home/components/dashboard/org_navbar/org_navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizationRegisterComponent,
    OrgDashBoard,
    OrganizationLoginComponent,
    HospitalRegistration,
    OrgNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AddressDetailsFetch,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
