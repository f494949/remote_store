// 类：描述创建对象共同的属性和方法
// 实例化对象
class Persons {
    constructor(name, ages) {
        this.name = name;
        this.ages = ages;
    }
    sayHi(str) {
        console.log('hi,' + str);
    }
}
new Persons('张三', 18);
