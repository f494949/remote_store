package main

func main() {

}

func list(x, y int) [][]int {
	arr := [][]int{}
	key := 0
	if x >= y {
		for i := 0; i < x; i++ {
			key++
			arr[key] = append(arr[key], y)
		}
	}
	return arr
}
