import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { products } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  itemDetail: any[];
  item: any[];
  product:any;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    
  }
  
  ngOnInit() {
    this.productId = this.route.snapshot.params[':id'];

    // this.route.paramMap.subscribe(params => {
    //   this.product = products[+params.get('productId')];
    // });
  }
}
