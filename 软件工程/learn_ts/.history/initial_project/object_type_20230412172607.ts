// 定义的变量减少是不允许的
// ?表示可选属性，定义对象?的属性可有可无
interface Person {
    name: string,
    age?: number
    [propName]
}

let tom: Person = { // 约束对象的形状(shape)
    name: 'tom',
    age: 18
}