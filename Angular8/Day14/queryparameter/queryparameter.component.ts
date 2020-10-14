import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  obj={};
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe((queryparam)=>{
      console.log(queryparam.get('fname'));
      console.log(queryparam.get('lname'));
      console.log(queryparam.get('id'));

      this.obj={
        myfname:queryparam.get('fname'),
        mylname:queryparam.get('lname'),
        myid:queryparam.get('id')
      }

    })
  }

}
