package main

import "fmt"

func main() {
	list := func(x int) []int {
		var arr []int
		for i := x; i >= 0; i++ {
			arr[i] = x * x
		}
		return arr
	}
	fmt.Println(list(5))
}
