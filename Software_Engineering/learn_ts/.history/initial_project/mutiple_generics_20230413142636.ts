// [123,'123']-->['123',123]
function updataArr<T,U>(t:[T,U]):[] {
    return [t[1],t[0]]
}
updataArr([])