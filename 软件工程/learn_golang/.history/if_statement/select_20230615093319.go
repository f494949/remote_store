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
		time.Sleep(1 * time.Second)
		c1 <- "one"
	}()

	for i := 0; i < 2; i++ {
		select {
		case msg1 := <- c2:
			fmt.Println("received", msg1)
			// break
			return
		case msg2 := <- c1:
			fmt.Println("received", msg2)
		}
	}
}
