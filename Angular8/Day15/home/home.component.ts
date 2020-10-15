import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=8;
  myusername="Sumit";

  myobj={
    fname:"Sumit",
    lname:"Raokhande",
    id:1
  }  
  constructor(private routes:Router) { }
  

  ngOnInit() {
   // console.log("On Init Called...");
  }

  onPage1(){
    this.myid=9;
    this.routes.navigate(['/page1',this.myid]);
  }
  onPage2(){
    this.myid=9;
    this.myusername="Java By Kiran";
    this.routes.navigate(['/page2',this.myid,this.myusername])
  }

  onPage3(){
    this.routes.navigate(['/page3']);
  }

  onfollower(){
    this.routes.navigate(['/follower']);
  }
  onQueryParam(){
    this.routes.navigate(['/queryparam',this.myid],{queryParams:this.myobj});
  }

}
