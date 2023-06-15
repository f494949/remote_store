package main

func main() {
	list := []int
	output := list(4,)
}


// 二维数组，x为层数，y为每层个数
func list(x int, y []int) [][]int {
	arr := [][]int{}
	for i := 0; i < x; i++ {
		arr[i] = append(arr[i], y...)
	}
	return arr
}
