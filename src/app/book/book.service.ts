import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { BookDetail } from './bookDetail';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private apiUrl = environment.baseUrl + 'books';
constructor(private http: HttpClient) { }

getBooks(): Observable<BookDetail[]> {
  return this.http.get<BookDetail[]>(this.apiUrl);

 }
}
