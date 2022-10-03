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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizationRegisterComponent
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
