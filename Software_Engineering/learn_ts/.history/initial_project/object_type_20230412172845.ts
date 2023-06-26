// 定义的变量减少是不允许的
// ?表示可选属性，定义对象?的属性可有可无
interface Person {
    id: number,
    name: string,
    age?: number,
    [propName:string]: string | number // 一个接口只能定义一个任意属性
}

let tom: Person = { // 约束对象的形状(shape)
    id:''
    name: 'tom',
    age: 18
}