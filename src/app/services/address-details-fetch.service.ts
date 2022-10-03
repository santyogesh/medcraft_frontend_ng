import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AddressDetailsFetch {   
    private baseURL = "https://api.countrystatecity.in";
    private countryListEndPoints = "/v1/countries";
    private httpHeader = new HttpHeaders({
        "X-CSCAPI-KEY": "Q0MxWEpQT2lteHRBSVEyUllQcHByb0g3WmRyWGdZSVhjMWYxWkNGZg==",
        "Content-Type": "application/json",
    }); 

    constructor(private httpClient : HttpClient) {
    }

    async getCountyList() {
        let countryList = this.httpClient.get(this.baseURL + this.countryListEndPoints, { headers:this.httpHeader }).toPromise();
        return countryList;
    }

    async getStateList(country_code: string) {
        let stateListEndPoints = this.countryListEndPoints + `/${country_code}/states`;    
        let stateList = await this.httpClient.get(this.baseURL + stateListEndPoints, { headers: this.httpHeader }).toPromise();
        return stateList;
    }

    async getCityList(country_code: string, state_code: string) {
        let cityListEndPoints = this.countryListEndPoints + `/${country_code}/states/${state_code}/cities`; 
        let cityList = await this.httpClient.get(this.baseURL + cityListEndPoints, {headers: this.httpHeader}).toPromise();
        return cityList;
    }

}