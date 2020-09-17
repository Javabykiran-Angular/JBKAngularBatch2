
export class MyClass{

    constructor( private fname:string,public lname:string,public id:number){
        
    }


    display(){
        console.log(`
        --------------- Display The Data--------
           First name :: ${this.fname}
           Last name  ::  ${this.lname}
           Id          :: ${this.id}
        `);
    }

}