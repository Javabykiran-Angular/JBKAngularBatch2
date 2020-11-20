import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tempEmpdata:any[]=[
    {
      id:1,
      name:'sumit',
      departmentit:'IT',
      status:'Active',
      phoneno:9960556397,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:2,
      name:'Kiran',
      departmentit:'Marketing',
      status:'Active',
      phoneno:9960558956,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit1',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    }, {
      id:3,
      name:'Spruha',
      departmentit:'Administrative',
      status:'InActive',
      phoneno:8087556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:4,
      name:'Amit',
      departmentit:'IT',
      status:'InActive',
      phoneno:9960789397,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Kiran',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:5,
      name:'Nilam',
      departmentit:'Account',
      status:'Active',
      phoneno:8460556397,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Kiran'

    },
    {
      id:6,
      name:'Pratiksha',
      departmentit:'Development',
      status:'Active',
      phoneno:9960556032,
      country:{
        cid:3,
        cname:'Germany'
      },
      createddtm:'22-10-2020',
      createdby:'Sumit',
      updateddtm:'22-10-2020',
      updatedby:'Sumit'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },{
      id:7,
      name:'XYZ',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:88,
      name:'XYZ1',
      departmentit:'Networking',
      status:'Active',
      phoneno:9978556032,
      country:{
        cid:2,
        cname:'USA'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:77,
      name:'PQR',
      departmentit:'Networking',
      status:'Suspend',
      phoneno:9978556038,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    },
    {
      id:70,
      name:'XYZ12',
      departmentit:'Marketing',
      status:'InActive',
      phoneno:9978556032,
      country:{
        cid:1,
        cname:'India'
      },
      createddtm:'22-10-2020',
      createdby:'Admin',
      updateddtm:'22-10-2020',
      updatedby:'Admin'

    }
  ];

  updateObj={};
  isRadioBtnClick=null;

  constructor(private route:Router,private toaster:ToastrService) { }

  ngOnInit() {
   
  }

  onRadioClick(item){
    console.log(item);
    this.isRadioBtnClick=item.name;
  //this.updateObj=item;    
  this.updateObj={
    id:item.id,
    name:item.name,
    departmentit:item.departmentit,
    status:item.status,
    phoneno:item.phoneno,
    cname:item.country.cname,
    cid:item.country.cid,
    createddtm:item.createddtm,
    createdby:item.createdby,
    updateddtm:item.updateddtm,
    updatedby:item.updatedby

  }

  }

  RadioBtnValidation(){
    if(this.isRadioBtnClick!=null){
      return true;
    }
    return false;
  }

  onAddEmpolyee(){
    this.route.navigate(['/addEmployee']);
  }
  onUpdate(){
    if(this.RadioBtnValidation()){
      this.route.navigate(['/updateemployee'],{ queryParams: this.updateObj} );
    }else{
      alert("Please Select Employee!!!! to Update ");
    }
    
  }
  onDelete(){

    if(this.RadioBtnValidation()){
      //Delete Code 
      //in subscribe method call toaster service
      this.toaster.success("Deleted Successfully!!!!");

    }else{
     // alert("Please Select Employee!!!! to Delete ");

     this.toaster.warning("Please Select Employee!!!! to Delete");
    }
  }
  onSuspend(){
    if(this.RadioBtnValidation()){
      //Suspend code 
      //in subscribe method call toaster service
      this.toaster.error("Employee is Suspended!!!!");
    }else{
      alert("Please Select Employee!!!! to Suspend ");
    }

  }
  onChangeStatus(){
    if(this.RadioBtnValidation()){
      //Change Status code 
      //in subscribe method call toaster service
      this.toaster.warning("Status Change Successfully!!!!!");
    }else{
      alert("Please Select Employee!!!! to Change status ");
    }
  }

}
