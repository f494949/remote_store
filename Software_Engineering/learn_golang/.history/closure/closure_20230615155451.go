package main

import(
	"fmt"
	"strings"
)

func main() {
	f := makeSuffix(".jpg")
	
}

func makeSuffix(suffix string) func(string) string{
	return func(name string) string {
		if !strings.HasSuffix(name,suffix) {
			return name + suffix
		}
		return name
	}
}