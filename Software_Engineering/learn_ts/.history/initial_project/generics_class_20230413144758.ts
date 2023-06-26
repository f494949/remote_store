class Person2<T> {
    name: string
    age: T
    constructor(name:string,age:T) {}
}
const p3 = new Person2<string>()