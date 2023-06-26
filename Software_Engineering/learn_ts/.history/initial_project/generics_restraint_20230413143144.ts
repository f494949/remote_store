// 获取一个参数长度
// 泛型约束，约束任意输入d
function getLength<T>(x: T): number {
	return x.length
}
