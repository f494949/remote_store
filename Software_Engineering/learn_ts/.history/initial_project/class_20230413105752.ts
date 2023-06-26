// 类：描述创建对象共同的属性和方法
// 实例化对象
class Person {
  name: string
  ages: number
  constructor(name: string, ages: number) {
    this.name = name
    this.ages = ages
  }
  sayHi(str:string){
    console.log();
    
  }
}

new Person('张三', 18)
