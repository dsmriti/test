import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  //@Input() itemDetail: any[];
  constructor(private route: ActivatedRoute) {
    //this.itemDetail = this.route.snapshot.params[''];
  }
  
  @Input()
  itemDetail: any[];
  set products(value: any) {
    if(value) {
      this.itemDetail = value;
    }
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params[':id'];
    console.log('array is', this.itemDetail);
  }
}
