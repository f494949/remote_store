// [123,'123']-->['123',123]
function updataArr<T, U>(t: [T, U]): [U, T] {
	return [t[1], t[0]]
}
console.log(updataArr<string, number>(['123', 123]))
