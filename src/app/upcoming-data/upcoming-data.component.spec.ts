import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDataComponent } from './upcoming-data.component';

describe('UpcomingDataComponent', () => {
  let component: UpcomingDataComponent;
  let fixture: ComponentFixture<UpcomingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
