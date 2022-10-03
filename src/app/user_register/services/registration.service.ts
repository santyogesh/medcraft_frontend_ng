import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    
    baseURL: string = "http://127.0.0.1:8000";
    orgRegistrationEndPoint = "/providers/organization_register";
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
}