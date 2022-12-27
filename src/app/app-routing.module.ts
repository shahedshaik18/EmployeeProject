import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidayinfoComponent } from './holidayinfo/holidayinfo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalaryinfoComponent } from './salaryinfo/salaryinfo.component';
import { TimeinfoComponent } from './timeinfo/timeinfo.component';
import { WorkhistoryComponent } from './workhistory/workhistory.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'workhistory',component:WorkhistoryComponent},
  {path:'timeinfo',component:TimeinfoComponent},
  {path:'salaryinfo',component:SalaryinfoComponent},
  {path:'holidayinfo',component:HolidayinfoComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
