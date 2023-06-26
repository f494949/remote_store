package main

import "fmt"

func main() {
	// 类型断言
	var i interface{} = "Hello,World"
	var str, ok = i.(string)
	if ok {
		fmt.Printf("str:%s\n", str)
	} else {
		fmt.Println("conversation failed")
	}

	// 类型转换
	var w Writer = &StringWriter{"syf"}
	fmt.Println("")
	sw := w.(*StringWriter)
	sw.str = "Hello,World"
	word := []byte{'!'}
	fmt.Println(sw.writer(word))
}

type Writer interface {
	writer([]byte) (int, error)
}

type StringWriter struct {
	str string
}

func (sw *StringWriter) writer(data []byte) (int, error) {
	sw.str += string(data)
	return len(data), nil
}
