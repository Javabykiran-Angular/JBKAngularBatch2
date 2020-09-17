import {Employee} from './employee';
import {Department} from './department';

export class EmployeeDetails implements Employee{
    fname: string;
    lname: string;
    salary:number;
    
    //core java  Department dept;
    deptref:Department;
    static id:number=10;

    constructor(fname:string,lname:string,salary:number,role:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=salary;
        // Department deptref=new Department("dfv");
        this.deptref=new Department(role);
    }

    display() {
        console.log(`
        -------------Employee Details--------------
        First Name :: ${this.fname}
        Last Name :: ${this.lname}
        Salary :: ${this.salary}
        Role :: ${this.deptref.disp()}

        `);
       
    }
    
    
}