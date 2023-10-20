import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make a GET request to your API to fetch the list of books
    this.http.get<any[]>('http://localhost:3000/api/books')
      .subscribe((data) => {
        this.books = data;
      });
  }
}
