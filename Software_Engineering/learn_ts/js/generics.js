let getArr = function (value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
};
// 使用泛型，在定义时不需要先确定类型，而是使用时再去确定
// 如果没有确定，就会走类型推断
console.log(getArr(123, 3));
console.log(getArr('123', 3));
let people = {
    name: 'pink'
};
let people2 = {
    name: 123
};
