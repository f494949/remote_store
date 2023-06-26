package main

import "fmt"

func main() {
	// 1*2*2*3*3*....x*x
	list := func(x int) []int {
		var arr []int
		for i := 0; i > x; i-- {
			arr[i] = i * i
		}
		return arr
	}
	fmt.Println(list(5))
}
