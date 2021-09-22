import { Author } from '../author/author.module';

export interface Book {
  id: number;
  title: string;
  pages: string;
  coverLink: string;
  series: number;
  publishDate: Date;
  authors?: Array<Author>;
}
