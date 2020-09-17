
import { Shape } from './shape';

export class Rectangle extends Shape{
        length:number;
        breadth:number;
        area:number;

        constructor(l:number,b:number){
            super();
            this.length=l;
            this.breadth=b;
            this.area=0;
        }
        Myarea(){
            this.area=this.length*this.breadth;
        }
        Display(){
            console.log(`
        ----------Area of Rectangle--------------
        Legth is ${this.length} & Breadth is ${this.breadth}
        whose Area is ${this.area}
        `);
        }


}