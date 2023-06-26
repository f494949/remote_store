abstract class Y {
    abstract name:string
    // constructor(name){
    //     this.name
    // } // 不能实例化
}

class Z extends Y {
    constructor(name) {
        super(name)
    }
}

const z = new Z('张三')