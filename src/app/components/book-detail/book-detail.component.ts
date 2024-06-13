import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent {
  book: Book | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.book = this.bookService.getById(id);
  }
}
