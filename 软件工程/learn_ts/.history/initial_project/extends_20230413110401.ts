class Animal { // 父类
  name: string
  age: string
  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }
  sayHello(str:string){
    console.log('hi,'+str);
    
  }
}
