import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryinfoComponent } from './salaryinfo.component';

describe('SalaryinfoComponent', () => {
  let component: SalaryinfoComponent;
  let fixture: ComponentFixture<SalaryinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
