// (123,3)-->[123,123,123]
// T表示任意输入的类型
interface IArr{
    <T>(value:T,count:number):Array<>
}
function getArr<T>(value: T, count: number): T[] {
	const arr: T[] = []
	for (let i = 0; i < count; i++) {
		arr.push(value)
	}
	return arr
}
// 使用泛型，在定义时不需要先确定类型，而是使用时再去确定
// 如果没有确定，就会走类型推断
console.log(getArr(123, 3))
console.log(getArr<string>('123', 3))
