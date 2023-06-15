package main

import(
	"fmt"
	// "reflect"
)

func main() {
	row := [5]int{1,2,3,4,5}
	output := list(4,row)
	fmt.Println()
}


// 二维数组，x为层数，y为每层个数
func list(x int, y []int) [][]int {
	arr := [][]int{}
	for i := 0; i < x; i++ {
		// arr[i] = append(arr[i][len(y)], y...)
		for j:=0; j < len(y); j++ {
			arr[i][j] = append(arr, y)
		}
	}
	return arr
}
