class X {
	//readonly age: number // 只读属性，但是在构造函数是可以修改的
	constructor(readonly age: number) {
		// this.age = age
	}
}

const a1 = new X(13)
