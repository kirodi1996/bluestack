import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCampaignComponent } from './past-campaign.component';

describe('PastCampaignComponent', () => {
  let component: PastCampaignComponent;
  let fixture: ComponentFixture<PastCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
