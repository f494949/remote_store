package main

import "fmt"

func main() {
	//指针
	a := 20
	var p *int = &a              // p *= &a 不行
	fmt.Printf("a中的值为:%d\n", *p) // 指针访问值
	fmt.Printf("p中的地址:%x\n", p)  // 指针变量的存储地址

	// 当一个指针被定义后没有分配到任何变量时，它的值为 nil
	var ptr *int
	fmt.Printf("ptr的值: %x\n", ptr)

	// 指针数组
	list := []int{1, 2, 3}
	arr := make([]*int, len(list)) //要先使用make初始化arr切片，才能往里添加元素
	for i := 0; i < 3; i++ {
		arr[i] = &list[i]
	}
	for i := 0; i < 3; i++ {
		fmt.Printf("a[%d]的值：%d\n", i, *arr[i])
	}

	// pointer to pointer
	b := 100
	var pointer *int = &b
	var doublePointer **int = &pointer
	fmt.Printf("pointer的地址:%x\n", pointer)
	fmt.Printf("doublePointer的地址:%x\n", doublePointer)
	fmt.Printf("pointer的值:%d\n", *pointer)
	fmt.Printf("doublePointer的值:%d\n", **doublePointer)

	//pointer_function_1
	x := 10
	fmt.Printf("x的值为:%d\n", x)
	test(&x) // 对原始属性的值进行修改
	fmt.Printf("x的值为:%d\n", x)
}

//pointer_function_1
func test(x *int) {
	*x = *x + 1 
}
