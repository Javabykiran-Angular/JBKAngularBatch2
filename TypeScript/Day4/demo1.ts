//default parameter Function
//You can assign a default value to a parameter

//func with param & with return type => 4th type func

function add(a:number,b:number=10):number{
    return (a+b);
}

console.log(`
------------ Default Parameter Funct
   Given Two Value         ${add(2,2)}
   Given only one value    ${add(3,1)} 
`);

//Rest parameter Function


