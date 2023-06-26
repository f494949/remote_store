package main

import "fmt"

func main() {
	arr := []int{1, 2, 4, 8, 16, 32, 64}
	/
	for key, value := range arr {
		fmt.Printf("arr[%d] == %d\n", key, value)
	}

	// 读取key
	for key := range arr {
		fmt.Printf("key is %d\n", key)
	}

	// 读取value
	for _, value := range arr {
		fmt.Printf("value is %d\n", value)
	}
}
