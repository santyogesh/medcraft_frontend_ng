import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RestAPIServices {
    httpOptions: any = {
        Headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }) 
    };
    BASE_URL: string = "http://127.0.0.1:8000/hospital/";
    LOGIN_END_POINT : string = "hospital_login";

    constructor(private httpClient : HttpClient) {

    }

    async hospitalLogin(hospitalDetails : any) {
        let hospitalLoginDetails = {
            'hospital_name': hospitalDetails['hospital_name'],
            'hospital_password': hospitalDetails['hospital_password']
        };
        let hospitalLoginEndPoint = this.BASE_URL + this.LOGIN_END_POINT;
        let response = await this.httpClient.post<any>(hospitalLoginEndPoint, hospitalLoginDetails, this.httpOptions).toPromise();
        console.log(response);
        return response
    }
}