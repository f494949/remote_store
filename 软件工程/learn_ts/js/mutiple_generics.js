// [123,'123']-->['123',123]
function updataArr(t) {
    return [t[1], t[0]];
}
console.log(updataArr(['123', 123]));
console.log(updataArr([true, 123]));
