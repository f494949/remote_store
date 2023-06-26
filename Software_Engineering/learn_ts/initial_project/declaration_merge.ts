// 函数合并：函数重载
// 接口合并
// 类与接口合并一样
interface Cat {
	name: '英短'
	gender: '女'
}
interface Cat {
	name: '英短'
	age: 3
}
const cat: Cat = { name: '英短', age: 3, gender: '女' }
