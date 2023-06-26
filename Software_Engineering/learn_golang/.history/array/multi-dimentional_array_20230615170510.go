package main

func main() {

}

func list(x, y int) [][]int {
	arr := [][]int{}
	key := 0
	if x >= y {
		for i := 0; i < x; i++ {
			key++
			arr[key][i] = append(arr[i], y)
		}
	}
	return arr
}
