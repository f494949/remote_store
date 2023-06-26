package main

import "fmt"

func main() {
	var Book1 Books
	var Book2 Books

	Book1.author = "刘慈欣"
	Book1.title = "三体"
	Book1.book_id = 41541523

	
	printBooks1(Book1)
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
