import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  

  ngOnInit() {
   // console.log("On Init Called...");
  }

}
