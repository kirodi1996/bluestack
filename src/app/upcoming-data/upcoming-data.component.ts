import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-upcoming-data',
  templateUrl: './upcoming-data.component.html',
  styleUrls: ['./upcoming-data.component.css']
})
export class UpcomingDataComponent implements OnInit {
  @Input() upcomingData;
  @Output() rescheduleCampaign = new EventEmitter();
  @Input() selectedLanguage
  capCsv='';
  capCsvValue='';
  capResportValue='';
  capResport='';
  capScheduleAgainValue='';
  capScheduleAgain='';
  resource=[];
  capDaysValue='';
  capDays=''
  capDate='';
  capDateValue='';
  capCampaign ='';
  capCampaignValue=''
  capView='';
  capViewValue='';
  capActionValue='';
  capAction='';
  columns=[ ]

  constructor(public commonService:CommonServiceService) { }

  ngOnChanges(changes:SimpleChange){
    debugger;
    this.selectedLanguage=changes["selectedLanguage"]["currentValue"];
    this.getResource();
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
    this.capCsv= this.resource['data'].filter(x=>x.key==='capCsv')
    this.capCsvValue = this.capCsv[0][this.selectedLanguage]

    this.capResport = this.resource['data'].filter(x=>x.key==='capReport')    
    this.capResportValue = this.capResport[0][this.selectedLanguage]
    
    this.capScheduleAgain = this.resource['data'].filter(x=>x.key==='capScheduleAgain')
    this.capScheduleAgainValue = this.capScheduleAgain[0][this.selectedLanguage]
    
    this.capDays = this.resource['data'].filter(x=>x.key==='capDaysAhead')
    this.capDaysValue = this.capDays[0][this.selectedLanguage]
    
    
    
    this.capDate= this.resource['data'].filter(x=>x.key==='capDate');
    this.capDateValue= this.capDate[0][this.selectedLanguage]
    this.capCampaign = this.resource['data'].filter(x=>x.key==='capCampaign');
    this.capCampaignValue= this.capCampaign[0][this.selectedLanguage]
    this.capView= this.resource['data'].filter(x=>x.key==='capView');
    this.capViewValue= this.capView[0][this.selectedLanguage]
    this.capAction= this.resource['data'].filter(x=>x.key==='capAction');
    this.capActionValue= this.capAction[0][this.selectedLanguage]
    this.columns=[ this.capDateValue, this.capCampaignValue,this.capViewValue,this.capActionValue]


  }

  ngOnInit() {
    debugger;
    this.getResource();
  }

  

  campaignDateChange(selectedDate, data) {
    data.createdOn = selectedDate.getTime();
    this.rescheduleCampaign.emit();
  }

}
