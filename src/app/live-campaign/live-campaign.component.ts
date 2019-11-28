import { Component, OnInit, Input,ViewChild,ElementRef, SimpleChange } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-live-campaign',
  templateUrl: './live-campaign.component.html',
  styleUrls: ['./live-campaign.component.css']
})
export class LiveCampaignComponent implements OnInit {
  @Input()liveData;
  @Input() selectedLanguage
  @ViewChild('myModal') myModal: ElementRef
  constructor(public commonService:CommonServiceService) { }
  resource=[];
  capCsv='';
  capCsvValue='';
  capResportValue='';
  capResport='';
  capScheduleAgainValue='';
  capScheduleAgain='';
  capDate='';
  capDateValue='';
  capCampaign ='';
  capCampaignValue=''
  capView='';
  capViewValue='';
  capActionValue='';
  capAction='';
  columns=[];
  ngOnChanges(changes:SimpleChange){
    this.selectedLanguage=changes["selectedLanguage"]["currentValue"];
    this.getResource();
  }

 


  ngOnInit() {
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
    this.capScheduleAgainValue = this.capResport[0][this.selectedLanguage]
    
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

  modal()
  {
    debugger;
    this.myModal.nativeElement.style.display='block';
  }
}
