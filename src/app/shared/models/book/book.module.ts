import { Author } from '../author/author.module';

export interface Book {
  id?: string;
  title: string;
  pages: number;
  coverLink?: string;
  series: number;
  publishDate: Date;
  authors?: Array<Author>;
  popularity: number;
}
