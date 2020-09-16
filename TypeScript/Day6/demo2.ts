import {simple3,Simple,simple2,add,pi} from './demo1';

import {MyPackage} from './Mypackage/mypack';

import {MyPackage2} from './Mypackage/Mypackg2/mypack2';


var obj=new Simple("java","Kiran",2);
    obj.display();
     

var objpack=new  MyPackage();
    objpack.disp();

    console.log(`
    -----------------------
    Function call ${add(2,3)}
    --------------------------
    Pi value is ${pi}
    `);