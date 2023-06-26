function getLength(x: string | number): number {
  if(x.length){
    return x.length
  }else {
    return x.toString().length
  }
}
