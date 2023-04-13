// 使用枚举类型，给一组数值赋予名称
// 可以通过名称去拿值，通过值拿取名称
// 1,2,3,4
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 1] = "one";
    NumberType[NumberType["two"] = 2] = "two";
    NumberType[NumberType["three"] = 3] = "three";
    NumberType[NumberType["four"] = 4] = "four";
})(NumberType || (NumberType = {}));
console.log(NumberType);
// 枚举项：常数项和计算所得项
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 'blue'.length] = "blue"; // 计算所得项后不能添加未赋值的枚举项
})(Color || (Color = {}));
console.log(0 /* o */);
console.log(1 /* b */);
console.log(2 /* j */);
console.log(0 /* a */);
