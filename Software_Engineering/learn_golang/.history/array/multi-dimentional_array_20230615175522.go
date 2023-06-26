package main

import (
	"fmt"
	// "reflect"
)

func main() {
	row := []int{1, 2, 3, 4, 5}
	output := list(4, row)
	fmt.Println(output)
}

// 二维数组，x为层数，y为每层个数
func list(x int, y []int) [][]int {
	arr := [][]int{}
	for j := 0; j < x; j++ {
		// arr[i][j] = append(arr, y)
		// append的参数一方是切片其余就必须都是切片
		arr = append(arr, y)
	}
	return arr
}
