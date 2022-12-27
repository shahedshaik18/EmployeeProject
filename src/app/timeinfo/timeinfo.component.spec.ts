import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeinfoComponent } from './timeinfo.component';

describe('TimeinfoComponent', () => {
  let component: TimeinfoComponent;
  let fixture: ComponentFixture<TimeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
