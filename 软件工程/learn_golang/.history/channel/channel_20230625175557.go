package main

func main() {
	s = []int{7,9,10,}
}

func sum(s []int, c chan int) {
	sum := 0
	for _,v := range s {
		sum += v
	}
	c <- sum
}
