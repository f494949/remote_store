package main

func main() {
	var Book Books

	Book.author="刘慈欣"
	Book.title="三体"
	
}

type Books struct {
	book_id int
	title string
	author string
}