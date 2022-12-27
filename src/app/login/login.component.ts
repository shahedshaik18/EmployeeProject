import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=undefined;
  password=undefined;
  document:any;


  constructor(@Inject(DOCUMENT)document:Document,private router:Router) {
    this.document=document
   }

  ngOnInit(): void {
  }
  submitdata(event:any){
    console.log("hi")
  // if(this.document.getElementById("username").value=="shahed"  && this.document.getElementById("password").value=="shahed1234"){
  //   alert('login success');
  //   this.router.navigate(['home']);
  // }else{
  //   alert('login failed');

  // }

  if(this.document.getElementById("username").value=="shahed"){
    alert("login")
  }


}
}
