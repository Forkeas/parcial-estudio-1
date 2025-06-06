import { Component, OnInit } from '@angular/core';
import { BookDetail } from '../bookDetail';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<BookDetail> = [];
  selectedBook!: BookDetail;
  selected: Boolean = false;
  constructor(private bookService: BookService) { }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    }
    );
  }

  ngOnInit() {
    this.getBooks();
  }
  onSelected(book: BookDetail): void {
    this.selectedBook = book;
    this.selected = true;
  }
}
