import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string="Java By Kiran";
  num1=12;
  boolvalue=true;
  imgUrl="../../assets/Desert.jpg";
  

  constructor() { }

  ngOnInit() {
  }

}
