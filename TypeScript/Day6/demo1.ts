
export class Simple{

    //property
   private fname:string;
    lname:string;
    id:number;

    static rollno:number=45;
    
    //constructor overloading is not allowed
    constructor(f:string,l:string,id:number){
        this.fname=f;
        this.lname=l;
        this.id=id;
    }


    display(){
        console.log(`
        ----------Display Data----------------
        First Name:: ${this.fname}
        Last name :: ${this.lname}
        Id is     :: ${this.id} 
        `);
    }


}

// var obj=new Simple("Sumit","Raokhande",1);
//     obj.display();

export class simple2{
    dip(){
        console.log("you are in Simple2 Class");
    }
}


export function add(a:number,b:number){
    return (a+b);
}

export const pi=3.14;

export class simple3{
    dip(){
        console.log("you are in Simple3 Class");
    }
}    
