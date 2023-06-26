package main

import "fmt"

type divideError struct {
	dividee int
	divider int
}

func (di *divideError) error() string {
	strFormat := `cannot proceed, the divider is zero!`
}

func main() {

}
