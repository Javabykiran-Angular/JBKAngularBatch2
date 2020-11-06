import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  incorrect:string='';

  constructor(private route:Router) { }  
  ngOnDestroy(): void {
    document.body.className="";
  }

  ngOnInit() {
    sessionStorage.clear();
    document.body.className="bg-img";
  }

  onsubmit(f){
    console.log(f);
    console.log(f.value.email);
    console.log(f.value.password);

    let email=f.value.email;
    let password=f.value.password;

    if(email=="admin@gmail.com" && password=="admin"){
      console.log("condition true");

      sessionStorage.setItem("username",email);
      this.route.navigate(['/home']);

    }else{
      console.log("condition False");
      this.incorrect="Invalid User!!!";
    }

    
  }

}
