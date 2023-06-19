range 关键字用于 for 循环中迭代数组(array)、切片(slice)、通道(channel)或集合(map)的元素
package main

import "fmt"

func main() {
	arr := []int{1, 2, 4, 8, 16, 32, 64}
	// 读取key和value
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
