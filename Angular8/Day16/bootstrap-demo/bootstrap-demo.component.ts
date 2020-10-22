import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {

  arrobj=[
    {
      name:'Samsung',
      description:'Good Phone',
      price:20000,
      quantity:1
    },
    {
      name:'Motorola',
      description:'Awsome Phone',
      price:15000,
      quantity:2
    },
    {
      name:'LG',
      description:'Life Good',
      price:21000,
      quantity:1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
