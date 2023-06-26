// ts函数声明，命名函数
function add (a: number, b: number) {
    return a + b
}

// 函数表达式，匿名函数
let add2 = function(a: number, b: number):number {
    return a + b
}

// 函数完整的写法
let add3:(a:number) = function(a: number, b: number):number {
    return a + b
}