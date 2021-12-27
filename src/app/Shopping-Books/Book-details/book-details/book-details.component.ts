import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../State/Book.Model';
import { ActivatedRoute , Params ,Router} from '@angular/router';
import { SearchService } from '../../Search/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  books!: Observable<BookItem[]>;
  userSelectedBook! : BookItem;
  bookId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private searchService : SearchService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.bookId = params['id']);
    this.searchService.getBooks(this.bookId).subscribe(data => {
      data.forEach(data => {
        if (data['id'] === this.bookId) {
          this.userSelectedBook = Object.assign({}, data);
        }
      })
    });
  }

  addToCart(){
    this.route.navigate(['billingDetails']);
  }

  buyNow(){
    this.route.navigate(['billingDetails']);
  }

}
