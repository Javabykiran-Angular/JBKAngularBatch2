import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:string='';
  name:string='';
  departmentit:string='';
  status:string='';
  phoneno:string='';
  country={};
  cname:string='';
  cid:string='';
  createddtm;
  createdby:string='';
  updateddtm;
  updatedby:string='';

  constructor(private router:ActivatedRoute) { 

  }

  ngOnInit() {
    this.GetAllUrlData();
    
  }

  GetAllUrlData(){
    this.router.queryParamMap
    .subscribe((query)=>{
      this.id=query.get('id');
      this.name=query.get('name');
      
    });
  }

}
