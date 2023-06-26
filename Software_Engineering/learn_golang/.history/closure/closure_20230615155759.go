// 编写一个函数 makeSuffix(suffix string) ，可以接收一个文件后缀名，并返回一个闭包
// 调用闭包，可以传入一个文件名，如果该文件名没有指定后缀，则返回 文件名.jpg ，如果已经有.jpg，则返回原文件名。
// strings.HasSuffix，该函数可以判断某个字符串是否有指定的后缀。

package main

import(
	"fmt"
	"strings"
)

func main() {
	f := makeSuffix(".jpg")
	fmt.Println(f("xiaomi."))
}

func makeSuffix(suffix string) func(string) string{
	return func(name string) string {
		if !strings.HasSuffix(name,suffix) {
			return name + suffix
		}
		return name
	}
}