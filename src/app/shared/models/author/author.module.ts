import { Book } from '../book/book.module';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  books?: Array<Book>;
}
