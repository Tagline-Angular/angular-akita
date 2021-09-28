import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from 'src/app/session/state/session.query';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  productList: Array<any> = [];
  username$: Observable<string>;

  constructor(private sessionQuery: SessionQuery) {
    this.username$ = this.sessionQuery.selectUserName();
  }

  ngOnInit(): void {
    this.productList = [
      {
        id: 1,
        name: 'Test1',
      },
      {
        id: 2,
        name: 'Test2',
      },
      {
        id: 3,
        name: 'Test3',
      },
      {
        id: 4,
        name: 'Test4',
      },
    ];
  }
}
