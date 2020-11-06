import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:"addEmployee",component:AddEmployeeComponent
  },
  {
    path:"updateemployee",
    component:UpdateEmployeeComponent
  },
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
