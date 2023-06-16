package main

import "fmt"

func main() {
	a := 20
	var p * int = &a
	fmt.Printf("a中的值为:%d\n",*p) // 指针访问值
	fmt.Printf("p中的地址:%x\n", p) // 指针变量的地址
}