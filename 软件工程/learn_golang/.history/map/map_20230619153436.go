package main

import "fmt"

func main() {
	country := make(map[string] string)

	country["China"] = "中国"
	country["America"] = "美国"
	country["Japan"] = "日本"

	v,ok := country["Canada"]
	if ok {
		fmt.Printf("Canada是%s\n", v)
	} else {
		fmt.Println("")
	}
}