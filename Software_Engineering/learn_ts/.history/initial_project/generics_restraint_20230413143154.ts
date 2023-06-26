// 获取一个参数长度
// 泛型约束，约束任意输入的类型，必须要有length
function getLength<T>(x: T): number {
	return x.length
}
