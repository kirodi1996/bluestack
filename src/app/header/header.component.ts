import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDayStartTime: number = new Date().setHours(0, 0, 0, 0);
  currentDayEndTime: number = new Date().setHours(23, 60, 60, 999);
  jsonData: [] = [];
  updatedData: [] = [];
  liveData = [];
  upcomingData = [];
  pastData = [];
  selectedTab: string = 'upcoming';
  upcomingClass:boolean=true
  liveClass:boolean=false;
  pastClass:boolean=false;
  resource=[];
  capManageCampaigns;
  capManageCampaignsValue='';
  capUpcomingCampaigns;
  capUpcomingCampaignsValue='';
  capPastCampaigns
  capPastCampaignsValue='';
  capLiveCampaigns
  capLiveCampaignsValue='';
  capGerman='';
  capGermanValue='';
  capEnglish='';
  capEnglishValue='';
  selectedLanguage='english';

  constructor(private router: Router, private commonService: CommonServiceService) { }

  ngOnInit() {
    this.getData();
    this.getResource();
    
    this.formatDate();
  }

  getResource(){
    this.commonService.getResourceData().subscribe(
      (x) => {
        this.resource= x;
        this.getResourceValue();
    })    
  }

  getResourceValue(){
    debugger;
    this.capManageCampaigns= this.resource['data'].filter(x=>x.key==='capManageCampaigns')
    this.capManageCampaignsValue = this.capManageCampaigns[0][this.selectedLanguage]

    this.capUpcomingCampaigns=this.resource['data'].filter(x=>x.key==='capUpcomingCampaigns')
    this.capUpcomingCampaignsValue = this.capUpcomingCampaigns[0][this.selectedLanguage]

    this.capLiveCampaigns=this.resource['data'].filter(x=>x.key==='capLiveCampaigns')
    this.capLiveCampaignsValue = this.capLiveCampaigns[0][this.selectedLanguage]

    this.capPastCampaigns = this.resource['data'].filter(x=>x.key==='capPastCampaigns')
    this.capPastCampaignsValue = this.capPastCampaigns[0][this.selectedLanguage]

    this.capGerman = this.resource['data'].filter(x=>x.key==='capGerman')
    this.capGermanValue = this.capGerman[0][this.selectedLanguage]

    this.capEnglish = this.resource['data'].filter(x=>x.key==='capEnglish')
    this.capEnglishValue = this.capEnglish[0][this.selectedLanguage]

  }

  getData() {
    this.commonService.getJsonData().subscribe(
      (x) => {
        debugger;
        this.jsonData = x.data;
        this.liveData = this.jsonData.filter(x => {
          return x["createdOn"] >= this.currentDayStartTime && x["createdOn"] <= this.currentDayEndTime
        });
        this.upcomingData = this.jsonData.filter((x :any) => {
          if (x["createdOn"] > this.currentDayEndTime) {
            const difference_In_Time = this.currentDayStartTime - x['createdOn'];
            x['differenceInDays'] = Math.abs(Math.ceil(difference_In_Time / (1000 * 3600 * 24)));
            return x["createdOn"] > this.currentDayEndTime
          }
        })
        this.pastData = this.jsonData.filter((x :any) => {
          if (x["createdOn"] < this.currentDayStartTime) {
            const difference_In_Time = this.currentDayStartTime - x['createdOn'];
            x['differenceInDays'] = Math.ceil(difference_In_Time / (1000 * 3600 * 24));
            return x["createdOn"] < this.currentDayStartTime
          }
        })
        this.updatedData = Object.assign({}, this.jsonData);
      }
    );
  }
  toggle(tab) {
    this.selectedTab = tab;
    if(tab==='upcoming'){
      this.upcomingClass=true;
      this.liveClass=false;
      this.pastClass=false;
    }
    else if(tab==='live'){
      this.upcomingClass=false;
      this.liveClass=true;
      this.pastClass=false;
    }
    else{
      this.upcomingClass=false;
      this.liveClass=false;
      this.pastClass=true;
    }
  }

  formatDate() {


  }

  rescheduleCampaign() {
    
    debugger;
    this.liveData = this.jsonData.filter(x => {
      return x["createdOn"] >= this.currentDayStartTime && x["createdOn"] <= this.currentDayEndTime
    });
    this.upcomingData = this.jsonData.filter((x :any) => {
      if (x["createdOn"] > this.currentDayEndTime) {
        const difference_In_Time = this.currentDayStartTime - x['createdOn'];
        x['differenceInDays'] = Math.abs(Math.ceil(difference_In_Time / (1000 * 3600 * 24)));
        return x["createdOn"] > this.currentDayEndTime
      }
    })
    this.pastData = this.jsonData.filter((x :any) => {
      if (x["createdOn"] < this.currentDayStartTime) {
        const difference_In_Time = this.currentDayStartTime - x['createdOn'];
        x['differenceInDays'] = Math.ceil(difference_In_Time / (1000 * 3600 * 24));
        return x["createdOn"] < this.currentDayStartTime
      }
    })
    this.updatedData = Object.assign({}, this.jsonData);
  }

}