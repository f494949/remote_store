package main

import "fmt"

func main() {
	
	list := func(x int) []int {
		var arr []int
		for i := x-1; i >= 0; i-- {
			arr[i] = i * i
		}
		return arr
	}
	fmt.Println(list(5))
}
