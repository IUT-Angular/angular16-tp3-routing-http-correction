import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BOOKS } from "../datas/books.stub";
import { Book } from "../models/book.model";

@Injectable()
export class BookService {
    private books: Book[];
    private readonly bookApiUrl = 'https://664ba07f35bbda10987d9f99.mockapi.io/api/books';

    public constructor(private http: HttpClient){
        this.books = BOOKS;

        this.http.get<Book[]>(this.bookApiUrl).subscribe(books => {
            books.forEach(b => {
                this.addBookToLocal(b);
            });
        });
    }

    public getAll(): Book[]{
        return this.books;
    }

    public getById(id: number): Book | undefined{
        return this.books.find(b => b.id === id);
    }

    public addBook(book: Book): void{
        this.addBookToLocal(book);
        this.addBookToApi(book);
    }

    private addBookToLocal(book: Book): void{
        if(book.id === 0){
            book.id = Math.max(...this.books.map(b => b.id)) + 1;
        }

        const existedBook = this.books.find(b => b.title === book.title);
        if(existedBook)
            return;

        this.books.push(book);
    }

    private addBookToApi(book: Book): void{
        this.http.post<Book>(this.bookApiUrl, book).subscribe();
    }
}