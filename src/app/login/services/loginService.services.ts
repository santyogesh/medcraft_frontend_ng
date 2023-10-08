import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    
    BASE_URL: string = "http://127.0.0.1:8000";
    ORG_LOGIN_URL: string = "/providers/organization_login";
    httpOptions: any = {
        Headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient : HttpClient) {

    }

    async organizationLogin(orgLoginDetails : any) {
        let loginDetails = {
            organization_email : orgLoginDetails.organization_email,
            organization_password : orgLoginDetails.organization_password
        };
        let orgLoginEndPoint = this.BASE_URL + this.ORG_LOGIN_URL;
        console.log("=========== orgLoginEndPoints ==========");
        console.log(orgLoginEndPoint);
        console.log("---------------------------------");
        console.log("==== request body ======");
        console.log(loginDetails);
        console.log("========================");
        let response = await this.httpClient.post<any>(orgLoginEndPoint, loginDetails, this.httpOptions).toPromise();
        console.log(response);
        return response;
    }
}
