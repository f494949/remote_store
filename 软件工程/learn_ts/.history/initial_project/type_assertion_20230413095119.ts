// 类型断言：可以手动指定一个类型
// 2种方式
// 1.
function getLength(x: string | number): number {
  if(x.length){
    return x.length
  }else {
    return x.toString().length
  }
}
