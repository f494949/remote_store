abstract class Y {
    abstract name:string
    // constructor(name){
    //     this.name
    // } // 不能实例化
    abstract sayHi() // 不能具体实现
}

class Z extends Y {
    name: string
    // constructor(name) {
    //     super(name)
    // }
    // 在子类中去具体实现抽象类中的抽象方法
    sayHi() {
        console.log();
        
    }
}

const z = new Z('张三')