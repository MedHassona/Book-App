import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;

  constructor(private bookService: BooksService, private router: Router ) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.bookSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.emitBooks();
  }

  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Book){
    this.bookService.removeBook(book);
  }

  onViewBook(id: number){
    this.router.navigate(['/books','view',id]);
  }

  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }

}
