import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red'; 
  rating:number=24; 
  mycolor1:string='blue';

  myobj={
    color:'#f26d21',
    fontStyle:'italic',
    "font-size":'32px'
  };

  constructor() { }

  ngOnInit() {
  }

}
