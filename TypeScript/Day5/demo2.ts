//slice function
//To copy a data & make a new Array 
/*
var a=[10,20,30,40,50];
var temp=a.slice(1,4);
console.log("Original Data is :: "+a.join(' '));
console.log("Copied Data is :: "+temp.join(' '));
var temp1=a.slice();
console.log("Original Data is :: "+a.join(' '));
console.log("Copied All Data is :: "+temp1.join(' '));
var temp2=a.slice(2);
console.log("Original Data is :: "+a.join(' '));
console.log("Copied Data from index to till end is :: "+temp2.join(' '));
*/

//map function
//you can perform logical operation element by element

var a1=[2,3,4,5];

var res=a1.map((value,i)=>{    
    return (value*value);
});
console.log("Original Array "+a1);
console.log("resultant Array "+res);

//Explore sort Function.
//Explore filter 


