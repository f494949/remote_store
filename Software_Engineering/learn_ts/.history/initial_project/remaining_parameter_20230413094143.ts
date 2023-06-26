// 剩余参数
function fn(x: string, y: string, ...args: number[]) {
  console.log(x, y, args)
}
fn('', '', 1, 2, 3, 4, 5)

// 函数重载
function newAdd(x: string | number, y: string | number): string | number {
  if (typeof x == 'string' && typeof y == 'number') {
    return x + y
  }else if (typeof)
}
