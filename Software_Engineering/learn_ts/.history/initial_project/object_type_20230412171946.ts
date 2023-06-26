// 定义的变量减少是不允许的
// 
interface Person {
    name: string,
    age: number
}

let tom: Person = { // 约束对象的形状(shape)
    name: 'tom',
    age: 18
}