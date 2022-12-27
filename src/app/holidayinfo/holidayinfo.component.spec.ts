import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayinfoComponent } from './holidayinfo.component';

describe('HolidayinfoComponent', () => {
  let component: HolidayinfoComponent;
  let fixture: ComponentFixture<HolidayinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
