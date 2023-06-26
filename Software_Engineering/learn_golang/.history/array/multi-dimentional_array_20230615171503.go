package main

func main() {

}

// 二维数组，x为层数，y为每层个数
func list(x, y int) [][]int {
	arr := [][]int{}
	for i := 0; i < x; i++ {
		for j := 0; j < y; j++ {
			arr[i][j] = append()
		}
	}
	return arr
}
