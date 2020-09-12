//Anonymous function
//it does not have any name
//function aliase name var temp
var temp4= function (){
    console.log("First type function implement ");
}
// temp4();

//function type 4 implemet

 var temp1=function (a:number,b:number):number{
        return (a*b);
    }
    // console.log(`
    // ----------------------------------------
    //    Multiplication is ${temp1(2.5,2)}     
    // `);

    //Arrow function/Fat Arrow function
    //that funct also does have any name
   var temp3=()=>{
       console.log("First Arrow function is Implement");
    }    
    temp3();
//Type 4 implemet as arrow function

var temp5=(a:number,b:number)=>{
    return (a*b);
}
// console.log(`----------------------
//       Arrow function type 4 
//       ${temp5(6,6)}  
// `);

//optional parameter Function
// make it parameter as optional

//Basic type 3 is implement

function add(a:number,b?:number,c?:number){
    console.log(`
    -------------------
        Optional parameter
        ${a+b}
    `);
}
//NAN => Not a Number
//a=3 3+null
add(2,2);
add(3);







    
