import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    
    baseURL: string = "http://127.0.0.1:8000";
    orgRegistrationEndPoint = "/providers/organization_register";
    hospitalRegistrationEndPoint = "/providers/register_hospital";
    httpOptions: any = {
        Headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }; 

    constructor(private httpClient : HttpClient) {

    }

    async registerOrganization(organizationDetails : any) {
        let orgRegisterURL = this.baseURL + this.orgRegistrationEndPoint;
        console.log(orgRegisterURL);
        console.log(organizationDetails);
        let httpResponse = await this.httpClient.post(orgRegisterURL, organizationDetails, this.httpOptions).toPromise();
        return httpResponse;
    }

    async hospitalRegistration(hospitalDetails : any) {
        let hospitalRegistrationURL = this.baseURL + this.hospitalRegistrationEndPoint;
        console.log("--------------- Hospital Reg end point -------------");
        console.log(hospitalRegistrationURL);
        console.log(" --- details --");
        console.log(hospitalDetails);
        // hospitalDetails = JSON.parse(JSON.stringify(hospitalDetails));
        let httpResponse = await this.httpClient.post(hospitalRegistrationURL, hospitalDetails, this.httpOptions).toPromise();
        console.log("############################ http Response ############");
        console.log(httpResponse);
        console.log("############################# http Response #############");
        return httpResponse;
    }
}