mul();

//functions 
//4 basic types of function

// 1 function without parameter & without return type
// 2 function without parameter & with return type (getter)
// 3 function with parameter & without return type
// 4 function with parameter & with return type

function mul(){
   console.log("We mAKE first type of function....."); 
}
function mul2():number{
    return (5*5);
}
var res=mul2();
// console.log(`
// -------------------------
// Multiplication is ${res}
// `);

//3 type of func
function mul3(a:number,b:number){
  
    console.log(` =========Funct Type 3============
            ${a*b}
    `);
}
//mul3(2,4);

//4 type of func.

function mul4(a:number,b:number):number{
     return (a*b);
    //return (0);
}

// console.log(`
// ++++++++++++Funct type 4+++++++++++++++++
//         ${mul4(3,3)}
// `);











