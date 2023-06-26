// 类型断言：可以手动指定一个类型
// 2种方式
// 1.变量as类型
function getLength(x: string | number): number {
  if((x as string)){
    return x.length
  }else {
    return x.toString().length
  }
}
