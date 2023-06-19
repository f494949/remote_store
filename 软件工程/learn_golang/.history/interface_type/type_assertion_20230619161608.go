package main

import "fmt"

func main() {
	// 类型断言
	// var i interface{} = "Hello,World"
	// var str, ok = i.(string)
	// if ok {
	// 	fmt.Printf("str:%s\n", str)
	// } else {
	// 	fmt.Println("conversation failed")
	// }

	// 类型转换

}

type Writer interface {
	Writer([]byte) (int, error)
}

type StringWriter struct {
	str string
}

func (sw *StringWriter) Writer(data []byte) (int, error) {
	sw.str += string(data)
	return len(data), nil
}
