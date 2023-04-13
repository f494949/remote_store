class Y {
}
class Z extends Y {
    constructor(name) {
        super();
        this.name = name;
    }
    // 在子类中去具体实现抽象类中的抽象方法
    sayHi() {
        console.log('hi');
    }
}
const z = new Z('张三');
console.log(z.name);
z.sayHi();
