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
    blue='blue'.length // 计算所得项后不能添加
}

