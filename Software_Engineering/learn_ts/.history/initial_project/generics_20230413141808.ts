// (123,3)-->[123,123,123]
function getArr<T>(value: number, count: number): number[] {
	const arr: number[] = []
	for (let i = 0; i < count; i++) {
		arr.push(value)
	}
	return arr
}
// 使用泛型，在定义时不需要先确定类型，而是使用时再去确定
console.log(getArr(123, 3))
