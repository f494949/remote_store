package main

import "fmt"

func main() {
	a := 20
	var p * int = &a
	fmt.Printf("a中的值为：%d",*p) // 指针访问值
	ff
}