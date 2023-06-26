package main

func main() {

}

// 二维数组，x为层数，y为
func list(x int, y []int) [][]int {
	arr := [][]int{}
	for i := 0; i < x; i++ {
		arr[i] = append(arr[i], 1)
	}
	return arr
}
