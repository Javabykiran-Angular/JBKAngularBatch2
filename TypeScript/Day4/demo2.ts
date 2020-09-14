//Array
var a=[10,20,30];
var a1:string[]=["Angular 8",'React js','jsp'];
var a3=[];
var a4=['fbva','djfsd'];
//tuple 
var a5=[2,'fgffh',true,2.5,'hjdasjhdb'];
// var a6:(number|string)[]=['fgb,ahb',4,5.5,'fadfa',true];

// for(let i=0;i<a.length;i++){
//     console.log("Array Value is "+a[i]);
// }

// console.log("Print the Array "+a);

// console.log("Print Array Using Join Method "+a.join('@'));
// console.log("Print Array Using Join Method "+a.join(' '));
// console.log("Particular Element Access "+a[2]);

var a6:number[]=[];
//2 ways you can add value

//1 Using LIFO Principle we have to use Push & Pop
a6.push(20);
a6.push(30);
// console.log("Print the array "+a6.join());
var temp=a6.pop();
// console.log("Poped value is "+temp);
// console.log("Print the array "+a6.join());

//2 Way Using splice function
var a7=[45,10,66,80];
a7.splice(2,0,30);
// console.log(a7);
a7.splice(1,0,70,90,100);
// console.log(a7.join(" "));
a7.splice(5,1);
// console.log(a7.join(" "));
a7.splice(2,3);
// console.log(a7.join(" "));
a7.splice(2,1,77);
// console.log(a7.join(" "));
a7.splice(2,1,88,99);
// console.log(a7.join(" "));

//for reach

// a7.forEach((myvalue,i)=>{
//     console.log(`--------------------------
//     for Each my value is ${myvalue} & Index is ${i}
//     `)
// });

//rest parameter funct.
//...

function disp(...item:number[]){
    console.log(item.join("  "));
}

disp(45,78,88);
disp(45,78,88,99,85);













