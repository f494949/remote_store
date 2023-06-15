package main

import (
	"fmt"
	"math"
)

func main() {
	list := func(x int) []int{
		var arr []int
		for i := 0; i < x; i++ {
			arr[i] = (i+1)*(i+1)
		}
		return arr
	}
	fmt.Println(list(5))
}
