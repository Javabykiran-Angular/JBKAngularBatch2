import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  myid:string='';
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.paramMap
    .subscribe((param)=>{
      console.log(param.get('id'));
      this.myid=param.get('id');
    })

  }

}
