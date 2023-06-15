编写一个函数 makeSuffix(suffix string) ，可以接收一个文件后缀名，并返回一个闭包


调用闭包，可以传入一个文件名，如果该文件名没有指定后缀，则返回 文件名.jpg ，如果已经有.jpg，则返回原文件名。


strings.HasSuffix，该函数可以判断某个字符串是否有指定的后缀。

作者：甜点cc
链接：https://juejin.cn/post/7173901550685798414
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

package main

import(
	"fmt"
	"strings"
)

func main() {
	f := makeSuffix(".jpg")
	fmt.Println(f())
}

func makeSuffix(suffix string) func(string) string{
	return func(name string) string {
		if !strings.HasSuffix(name,suffix) {
			return name + suffix
		}
		return name
	}
}