package main

import "fmt"

func main() {
	var i interface{} = "Hello,World"
	str, = i.(string)
}