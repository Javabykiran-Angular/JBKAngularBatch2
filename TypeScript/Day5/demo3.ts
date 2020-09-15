
//Object/json
//It is stored in form Key & value format
// {} to make a object
//you can use 2 notation parse the object
//1 dot notation
//2 square notation

var obj={
    fname:"Sumit",
    lname:"Raokhande",
    id:1
};

//dot notation
// console.log("First name:: "+obj.fname);
// console.log("Last name:: "+obj.lname);
// console.log("ID:: "+obj.id);

//square notation
// console.log("First name:: "+obj['fname']);
// console.log("Last name:: "+obj["lname"]);
// console.log("ID:: "+obj['id']);

//Array of Object

var arrobj=[
    {
        fname:"Sumit",
        lname:"Raokhande1",
        id:1
    },
    {
        fname:"Kiran",
        lname:"Raokhande2",
        id:2
    },
    {
        fname:"Spruha",
        lname:"Raokhande3",
        id:3
    }
];

// console.log("First name is "+arrobj[0].fname);
// console.log("Last name is "+arrobj[0].lname);
// console.log("ID is "+arrobj[0]['id']);

// for (let i = 0; i < arrobj.length; i++) {
//    console.log(`
//    -------------------------------------------
//    First name is :: ${arrobj[i].fname}
//    Last name is ::  ${arrobj[i].lname}
//    Id is        ::  ${arrobj[i].id}
//    `);     
// }

var jsonobj={
    status:"Success",
    data:[
        {
            productname:"xyz",
            prize:10000,
            quantity:2,
            description:"Good Product"
        },
        {
            productname:"pqr",
            prize:20000,
            quantity:1,
            description:"Good"
        },
        {
            productname:"ABC",
            prize:30000,
            quantity:5,
            description:"Product"
        }
    ],
    
    error:"Invalid Data"

};

for (let i = 0; i < jsonobj.data.length; i++) {
    
    console.log(`
    -------------------------data 1 -----------------
            Product name is :: ${jsonobj.data[i].productname}
            Prize           :: ${jsonobj.data[i].prize}
            Quantity        :: ${jsonobj.data[i].quantity} 
    `);  
    

}
// == //it checks only value
// === //it checks Value as well as type

var arr1obj={
    status:"success",
    error:"invalid",
    data:[
        {
            month:["jan",'march','may'],
            marks:[45,56,88],
            fname:"Sumit Raokhande"
        },
        {
            month:["jan",'march','may'],
            marks:[45,56,88],
            fname:"Kiran Raokhande"
        }
    ]
}





