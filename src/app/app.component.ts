import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './common-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    constructor(private commonService:CommonServiceService){}
    
    ngOnInit(){
      
    }
    
    

    filterData(){
      
    }
}
