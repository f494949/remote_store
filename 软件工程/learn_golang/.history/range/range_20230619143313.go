package main

im

func main() {
	arr := []int{1, 2, 4, 8, 16, 32, 64}
	for i, v := range arr {
		fmt.Printf("arr[%d] == %d", i, v)
	}
}
