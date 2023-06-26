// 使用枚举类型，给一组数值赋予名称
// 可以通过名称去拿值，通过值拿取名称
// 1,2,3,4
enum NumberType {
  one = 1,
  two,
  three,
  four
}
console.log(NumberType)

// 枚举项：常数项和计算所得项
enum Color {
  red,
  blue = 'blue'.length // 计算所得项后不能添加未赋值的枚举项
}

// 常数枚举是使用const enum定义的枚举类型
// 与普通枚举的区别是，编译阶段会被删除，并且不能包含计算成员
const enum Obj {
  o,
  b,
  j
}
console.log(Obj.o)
console.log(Obj.b)
console.log(Obj.j)

// 外部枚举(Ambient Enum)
declare const enum ABC {
  a,
  b,
  c
}
console.log(ABC.a)
