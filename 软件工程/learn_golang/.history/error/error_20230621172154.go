package main

import "fmt"

type divideError struct {
	dividee int
	divider int
}

func (di *divideError) error() string {
	strFormat := `
	cannot proceed, the divider is zero!
	dividee: %d
	divider: 0`
	return fmt.Sprintf(strFormat, di.dividee)
}

func

func main() {

}
