import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {
  mycolor:string='';

  name:string='';

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    console.log("Change eVENT oCCUr...");
    this.mycolor='red';

  }

  onFocus(){
    this.mycolor='white';
  }

  OnKeyUp(value){
    console.log("Key Up Event Occur "+value);
  }

  OnKeyUp1(myvalue){
    console.log("Key Up Event "+myvalue.target.value);
  }

  OnKeyDown(value){
    console.log("Key Down Event Occur "+value);

  }

}
