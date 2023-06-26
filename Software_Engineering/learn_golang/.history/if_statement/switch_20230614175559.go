package main

import "fmt"

func main() {
	var a interface{}

	switch i:=a.(type) {
	case undefined:
		fmt.Println("x的类型: %T", i)
		// fallthrough不能用于type switch中
	case int:
		fmt.Println("x的类型为int")
		
	}

	switch {
		case true:
			fmt.Println("wu")
			fallthrough
		case false:
			fmt.Println("zhen")
	}
}