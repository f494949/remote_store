// 类型断言：可以手动指定一个类型
// 2种方式
// 1.变量as类型
// 2.<类型>变量
function getLength(x) {
    if (x.length) {
        return x.length;
    }
    else {
        return x.toString().length;
    }
}