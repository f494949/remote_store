package main

import "fmt"

func main() {
	var i interface{} = "Hello,World"
	var str,ok = i.(string)
	if ok {
		fmt.Printf("str:%d\n", str)
	}else {
		
	}
}