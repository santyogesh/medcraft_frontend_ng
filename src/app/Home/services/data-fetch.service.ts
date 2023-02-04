import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataFetchServices {
    BASE_URL: string = "http://127.0.0.1:8000";
    getHospitalListEndPoint: string = "/providers/hospital_list";
    httpOptions: any = {
        Headers: new HttpHeaders({
            'Content-Type': "application/json"
        })
    }

    constructor(private httpClient : HttpClient) {

    }

    async getListOfHospital(organizationDetails : any) {
        let hospitalListEndPoint : string = this.BASE_URL + this.getHospitalListEndPoint;
        let httpResponse = await this.httpClient.post<any>(hospitalListEndPoint, organizationDetails, this.httpOptions).toPromise();
        console.log("########################");
        console.log(httpResponse);
        console.log("########################");
        return httpResponse;
    }
}