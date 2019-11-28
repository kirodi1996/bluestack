import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCampaignComponent } from './live-campaign.component';

describe('LiveCampaignComponent', () => {
  let component: LiveCampaignComponent;
  let fixture: ComponentFixture<LiveCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
