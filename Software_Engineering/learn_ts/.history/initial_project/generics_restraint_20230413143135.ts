// 获取一个参数长度
// 泛型约束，yue's
function getLength<T>(x: T): number {
	return x.length
}
