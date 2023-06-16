package main

import "fmt"

func main() {
	a := 20
	var p *int = &a
	// p *= &a 不行
	fmt.Printf("a中的值为:%d\n", *p) // 指针访问值
	fmt.Printf("p中的地址:%x\n", p)  // 指针变量的存储地址

	// 当一个指针被定义后没有分配到任何变量时，它的值为 nil
	var ptr *int
	fmt.Printf("ptr的值: %x\n", ptr)

	// 指针数组
	list := [3]int{1, 2, 3}
	var arr *[]int
	for i:=0;i<
}
