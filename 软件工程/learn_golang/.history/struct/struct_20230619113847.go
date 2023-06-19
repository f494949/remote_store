package main

import "fmt"

func main() {
	var Book Books

	Book.author = "刘慈欣"
	Book.title = "三体"
	Book.book_id = 41541523
}

type Books struct {
	book_id int
	title   string
	author  string
}

func printBooks(book Books) {
	fmt.Printf("Book author:%s\n", book.author)
	fmt.Printf("Book title:%s\n", book.title)
	fmt.Printf("Book book_id:%s", book.book_id)
}
