import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CalendarModule} from 'primeng/calendar';
import { CalendarComponent } from './calendar/calendar.component';
import {  FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcomingDataComponent } from './upcoming-data/upcoming-data.component';
import { LiveCampaignComponent } from './live-campaign/live-campaign.component';
import { PastCampaignComponent } from './past-campaign/past-campaign.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    UpcomingDataComponent,
    LiveCampaignComponent,
    PastCampaignComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
