//Rest parameter 
//...
function Myrest(a:string,...item:number[]){

    console.log(item);
}

Myrest('fgsd',4,5,6);
Myrest('fgsd',4,5,6,9,7,55);

var a=[10,20,30];
a.splice(1,1,22,33,44);