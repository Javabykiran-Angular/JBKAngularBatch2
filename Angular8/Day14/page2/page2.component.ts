import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  id:number=0;
  username='';
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.paramMap
    .subscribe((param)=>{
      this.id=+param.get('id');
      this.username=param.get('username');
    })
  }

}
