import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  strname:string="java By Kiran";
  ishidden:boolean=true;
  res:number=0;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
    if(this.count==0){
    console.log("Click Event Occur!!");
    this.count++;
    }
  }

  onclick2(){
    this.strname='Sumit Raokhande';
    this.ishidden=false;
  }

}
