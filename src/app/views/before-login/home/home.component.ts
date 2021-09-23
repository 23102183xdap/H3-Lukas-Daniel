import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { Book } from 'src/app/shared/models/book/book.module';
import { BookService } from 'src/app/shared/services/book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentImg: number = 0;

  constructor(private api: BookService) {}
  img: Array<any> = [
    {
      index: 0,
      url: 'https://i2.wp.com/www.teenservicesunderground.com/wp-content/uploads/Bookmarks-1.jpg?resize=640%2C640',
    },
    {
      index: 1,
      url: 'https://i.pinimg.com/564x/12/f0/b3/12f0b3dd5a280baf2e944a9521dcbf28.jpg',
    },
    {
      index: 2,
      url: 'https://justbrowsingopl.files.wordpress.com/2014/08/appendix-removed.jpg?w=584',
    },
    {
      index: 3,
      url: 'https://bookbub-res.cloudinary.com/image/upload/f_auto,q_auto/v1584046703/blog/library-jokes-netflix-for-books.jpg',
    },
    {
      index: 4,
      url: 'https://s2982.pcdn.co/wp-content/uploads/2019/08/checking-you-out-pun.jpg.optimal.jpg',
    },
    {
      index: 5,
      url: 'https://jokojokes.com/images/jokes/library-jokes-do-you-know-why-libraries-dont-have-books-about-su.jpg',
    },
  ];
  booksLen!: number;

  ngOnInit(): void {
    this.api.GetBooks().subscribe((data) => (this.booksLen = data.length));
  }

  chooseImg(id: number): void {
    this.currentImg = id;
    console.log('chooseImg id : ', id);
  }
}
