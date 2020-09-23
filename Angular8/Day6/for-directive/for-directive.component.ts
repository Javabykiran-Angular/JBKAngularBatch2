import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  course=['Angular 8','React Js','Vue js','Embber Js','JSP'];

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

  constructor() { }

  ngOnInit() {

  }

}
