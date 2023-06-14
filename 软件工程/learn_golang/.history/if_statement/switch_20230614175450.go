package main

import "fmt"

func main() {
	var a interface{}

	switch i:=a.(type) {
	case null:
		fmt.Println("x的类型: %T", i)
		// fallthrough不能用于type switch中
	case int:
		fmt.Println("x的类型为int")
		
	}

	switch {
		case null:
			fmt.Println("")
	}
}