package main

import "fmt"

func judge() {
	var a interface{}

	switch i:=a.(type) {
	case nil: //nil表示指针、函数、接口、map、slice和channel等类型的零值
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