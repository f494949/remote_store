package main

func main() {
	var Book Books

	Book.author="刘慈欣"
}

type Books struct {
	book_id int
	title string
	author string
}