// (123,3)-->[123,123,123]
function getArr(value: number, count: number): number[] {
	const arr: number[] = []
	for (let i = 0; i < count; i++) {
		arr.push(value)
	}
	return arr
}
// 使用fan'xing
console.log(getArr(123, 3))
