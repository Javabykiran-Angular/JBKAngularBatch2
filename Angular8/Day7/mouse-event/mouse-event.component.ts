import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {

  arrobj=[
    {
      prodname:'samsung',
      quantity:2,
      prize:10000
    },
    {
      prodname:'Lg',
      quantity:1,
      prize:20000
    },
    {
      prodname:'Motorola',
      quantity:3,
      prize:15000
    }
  ];
  selected:string='';
  selected1:string='';
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(item){
    console.log("Mouse over event occur");
this.selected=item.prodname;

  }
  onMouseOut(){
    this.selected='';
  }

  onMouseOver1(item){
    console.log("Mouse over event occur");
this.selected1=item.prodname;

  }
  onMouseOut1(){
    this.selected1='';
  }

}
