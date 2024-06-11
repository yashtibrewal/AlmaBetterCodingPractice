

class Person{

    static #counter = 0;
    #id = ++Person.#counter;

    constructor(name){

        this.name = name;

    }

    getId(){
        return this.#id;
    }

}

const person = new Person("name");;
console.log(person.getId());
const person2 = new Person("name");;
console.log(person2.getId());


class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }

    getPerimeter(){
        return 2*(this.width + this.height);
    }

}

const rectangle = new Rectangle(5,10);
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

class Circle{

    constructor(radius){
        this.radius = radius;
    }

    getArea(){
        return Math.PI * this.radius**2;
    }

    getCircumference(){
        return 2*Math.PI*this.radius;
    }

}


const cirlce = new Circle(5);
console.log(cirlce.getCircumference());
console.log(cirlce.getArea());

const obj = {
    result:0,
    add:function(num1,num2){
        this.result = num1+num2;
        return this;
    }
}
obj.add.bind(obj);

console.log(obj.add(10,12).result);

