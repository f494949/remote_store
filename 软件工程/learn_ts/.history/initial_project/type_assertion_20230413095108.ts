// 类型断言：可以手动指定一个类型
// 2zhong
function getLength(x: string | number): number {
  if(x.length){
    return x.length
  }else {
    return x.toString().length
  }
}
