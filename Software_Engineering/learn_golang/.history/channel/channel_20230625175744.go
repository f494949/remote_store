package main

import "fmt"

func main() {
	s := []int{7,9,10,-8,4,6}
	c := make(chan int)
	fmt.Println(sum(s[:len(s)/2],c))
}

func sum(s []int, c chan int) {
	sum := 0
	for _,v := range s {
		sum += v
	}
	c <- sum
}
