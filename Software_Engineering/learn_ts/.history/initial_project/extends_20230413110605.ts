class Animal {
  // 父类
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHello(str: string) {
    console.log('hi,' + str)
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }
}
