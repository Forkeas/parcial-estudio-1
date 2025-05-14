import { Component, OnInit, Input } from '@angular/core';
import { BookDetail } from '../bookDetail';
import { Author } from '../../author/author';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;
  
  constructor() { }

  ngOnInit() {
  }

}
