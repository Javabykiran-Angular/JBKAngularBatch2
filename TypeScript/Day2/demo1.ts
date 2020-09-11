
console.log("Hello World....");
var a;
//number(int,float,double,long,short,byte),string('',""),boolean(true,false),any(number,string,boolean), It acts as value (undefined,null)
//var ==> it has global scope access throughout file
var a1:number=2.5; //forward declaration & defination
var a2:number;  //declaration
console.log('Value of a1 is '+a1);
console.log("Value of A2 is "+a2);
var a3:string='Sumit raokhande';
console.log(`
    -----------------------------
    Value of String is ${a3}
`);
var a4:any;
a4=10;
console.log(` value of a4 is ${a4} & 
its current datat type is ${typeof a4} `);
a4='Java By Kiran';
console.log(` value of a4 is ${a4} & 
its current datat type is ${typeof(a4) } `);

//type assertion
//its work with 'any' data type 
var a5:any;
// 1 Angle Bracket
// 2 as syntax

//1 Angle bracket
 //  (<string>a5).

//2 as syntax 
//(a5 as string). 

//var,const,let
//const => constant it is same your final keyword & its scope is global i.e access throughout the file 

const a6:number=12;
//a6=6;

let a7=12;
//let is used to defined variable & its scope is within the block (i.e. {})

//operator
// Airthematic(+,-,/,*,%) ,logic,relational,assignment,bitwise,conditional,ternery, post,pre increment,decrement.

//ternery
var b1:number=14;
var b2:number=5;
var temp= b1<b2 ? 'hi':'bye';
console.log("Output is "+temp);
//control statement
//if, if-else,switch,if-else if,break,continue
//loop
// for,while,do-while

if(b1>b2){

}else{
    
}
















