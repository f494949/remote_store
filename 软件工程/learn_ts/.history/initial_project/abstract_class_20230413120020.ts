abstract class Y {
    abstract name:string
    // constructor(name){
    //     this.name
    // } // 不能实例化
    abstract sayHi() // 不能具体实现
}

class Z extends Y {
//     constructor(name) {
//         super(name)
//     }
// }

const z = new Z('张三')