package main

import "fmt"

func main() {
	// 1*2*2*3*3*....x*x
	list := func(x int) []int {
		var arr []int
		for i := 0; i <= x; i++ {
			arr[i] = (i+1) * (i+1)
			if i=x {
				
			}
		}
		return arr
	}
	fmt.Println(list(5))
}
