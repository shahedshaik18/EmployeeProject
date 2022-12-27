import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkhistoryComponent } from './workhistory/workhistory.component';
import { TimeinfoComponent } from './timeinfo/timeinfo.component';
import { SalaryinfoComponent } from './salaryinfo/salaryinfo.component';
import { HolidayinfoComponent } from './holidayinfo/holidayinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,LoginComponent, NavbarComponent, WorkhistoryComponent, TimeinfoComponent, SalaryinfoComponent,  HolidayinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
