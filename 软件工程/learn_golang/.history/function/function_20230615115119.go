package main

import "fmt"

func main() {
	list := func(x int) []int {
		var arr []int
		for i := x; i > x; i++ {
			arr[i] = (i + 1) * (i + 1)
		}
		return arr
	}
	fmt.Println(list(5))
}
