package main

import "fmt"

func main() {
	// 1*2*2*3*3*....x*x
	list := func(x int) []int {
		// var arr []int
		arr := make([]int, x)
		for i := 0; i <= x; i++ {
			if i == x {
				break
			}
			arr[i] = (i + 1) * (i + 1)
		}
		return arr
	}
	fmt.Println(list(5))
}
