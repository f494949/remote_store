package main

func main() {

}

func list(x, y int) [][]int {
	arr := [][]int{}
	if x >= y {
		for i := 0; i < x; i++ {
			arr[i][0] = append(arr[i], y)
		}
	}
	return arr
}
