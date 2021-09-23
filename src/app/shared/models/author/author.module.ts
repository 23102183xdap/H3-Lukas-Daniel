import { Book } from '../book/book.module';

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  books?: Array<Book>;
}
