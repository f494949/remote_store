package main

import (
	"fmt"
	"math"
)

func main() {
	list := func(x int) []int{
		var arr []int
		for var i = 0; i < x; i++ {
			arr[i] = int(math.Pow(i+1,2))
		}
		return arr
	}
	fmt.Println(list(5))
}
