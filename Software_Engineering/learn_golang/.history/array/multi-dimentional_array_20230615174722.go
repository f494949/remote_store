package main

import(
	"fmt"
	// "reflect"
)

func main() {
	row := [5]int{1,2,3,4,5}
	output := list(4,row)
	fmt.Println(output)
}


// 二维数组，x为层数，y为每层个数
func list(x int, y []int) [][]int {
	arr := [][]int{}
	for i := 0; i < x; i++ {
		for j:=0; j < len(y); j++ {
			// arr[i][j] = append(arr, y)
			// append的参数必须都是切片
			a
		}
	}
	return arr
}
