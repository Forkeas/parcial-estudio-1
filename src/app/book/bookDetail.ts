import { Book } from './book';
import { Editorial } from '../editorial/editorial';
import { Review } from "./review";
import { Author } from '../author/author';
export class BookDetail extends Book {
    authors: Array<Author> = [];
    reviews: Array<Review> = [];

    constructor(id: number, name: string, isbn: string, description: string, image: string, publishingDate: any, editorial: Editorial, authors: Array<Author>, reviews: Array<Review>) {
        super(id, name, isbn, description, image, publishingDate, editorial);
        this.authors = authors;
        this.reviews = reviews;
    }
}
