import {Shape} from './shape';

export class Circle extends Shape{
    radius:number;
    area:number;

    constructor(radius:number){
        super(); 
        this.radius=radius;
                
    }

    Myarea(){
        this.area=3.14*this.radius*this.radius;
    }

    Display(){
        console.log(`
        ----------Area of Circle--------------
        Radius is ${this.radius} & whose Area is ${this.area}
        `);
    }


}