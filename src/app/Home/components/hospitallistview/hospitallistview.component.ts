import { Component, OnInit } from "@angular/core";
import { DataFetchServices } from "../../services/data-fetch.service";

@Component({
  selector: "hospital-list-view",
  templateUrl: './hospitallistview.component.html',
  styleUrls:[ './hospitallistview.component.css']  
})
export class HospitalListView implements OnInit {
    
    hospitalListDetails: any = {
      'count' : 0,
      'data' : []
    }

    constructor(private dataFetchService : DataFetchServices) {
      this.fetchHospitalDetails();
    }

    ngOnInit(): void {
        
    }

    async fetchHospitalDetails() {
      let organizationDetails : any = localStorage.getItem("user_details");
      organizationDetails = JSON.parse(organizationDetails);
      organizationDetails = {
        'access_token' : organizationDetails['access_token'],
        'organization_id'  : organizationDetails['organization_id']
      }
      this.hospitalListDetails = await this.dataFetchService.getListOfHospital(organizationDetails);
      console.log(organizationDetails);
      console.log(this.hospitalListDetails);
    }
} 