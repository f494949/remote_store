class Person2<T> {
    name: string
    age: T
    constructor(name:string,age:T) {
        this.name= name
        this.age = age
    }
}
const p3 = new Person2<string>('123','18')
const p4 = new Person2<string>('123','18')
