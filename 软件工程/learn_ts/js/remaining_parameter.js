// 剩余参数
function fn(x, y, ...args) {
    console.log(x, y, args);
}
fn('', '', 1, 2, 3, 4, 5);
function newAdd(x, y) {
    if (typeof x == 'string' && typeof y == 'number') {
        return x + y;
    }
    else if (typeof x == 'number' && typeof y == 'string') {
        return x + y;
    }
}
console.log(newAdd('张', '三'));
