// 剩余参数
function fn(x: string, y: string, ...args: number[]) {
  console.log(x, y, args)
}
fn('', '', 1, 2, 3, 4, 5)
