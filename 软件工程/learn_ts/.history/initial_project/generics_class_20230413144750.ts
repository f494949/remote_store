class Person2<T> {
    name: string
    age: T
    constructor() {}
}
const p3 = new Person2<string>()