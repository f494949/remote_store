package main

import "fmt"

func main() {
	a := 20
	var p * int = &a
	fmt.Println("a中的值为：%d")
}