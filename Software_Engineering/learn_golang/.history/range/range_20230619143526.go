package main

import "fmt"

func main() {
	arr := []int{1, 2, 4, 8, 16, 32, 64}
	for key, value := range arr {
		fmt.Printf("arr[%d] == %d\n", key, value)
	}
	for key, _ := range arr {
		fmt.Printf("arr", var)
	}
}
