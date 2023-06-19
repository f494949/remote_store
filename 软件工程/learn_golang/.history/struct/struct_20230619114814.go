package main

import "fmt"

func main() {
	var Book1 Books

	Book.author = "刘慈欣"
	Book.title = "三体"
	Book.book_id = 41541523
	printBooks1(Book)
}

type Books struct {
	book_id int
	title   string
	author  string
}

func printBooks1(book Books) {
	fmt.Printf("Book author:%s\n", book.author)
	fmt.Printf("Book title:%s\n", book.title)
	fmt.Printf("Book book_id:%d\n", book.book_id)
}

// 结构体指针
func printBooks2(book *Books) {
	fmt.Printf("Book author:%s\n", book.author)
	fmt.Printf("Book title:%s\n", book.title)
	fmt.Printf("Book book_id:%d\n", book.book_id)
}
