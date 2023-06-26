package main

import (
	"fmt"
	"time"
)

func main() {
	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		time.Sleep(1 * time.Second)
		c2 <- "two"
	}()

	go func() {
		time.Sleep(2 * time.Second)
		c1 <- "one"
	}()

	for i := 0; i < 2; i++ {
		select {
		case  <- c2:
			fmt.Println("received two")
			// break
			// break 语句并不能直接用于跳出 select 语句本身，因为 select 语句是非阻塞的，它会一直等待所有的通信操作都准备就绪
			// return
		case  <- c1:
			fmt.Println("received one")
		}
	}
}
