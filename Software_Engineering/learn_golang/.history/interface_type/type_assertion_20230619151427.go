package main

import "fmt"

func main() {
	var i interface{} = "Hello,World"
	var str,ok = i.(string)
}