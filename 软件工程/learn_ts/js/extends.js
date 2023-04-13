class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(str) {
        console.log('hi,' + str);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
}
