class X {
    //readonly age: number // 只读属性，但是在构造函数是可以修改的
    constructor(age) {
        this.age = age;
        // this.age = age
    }
}
const a1 = new X(13);
console.log(a1);
