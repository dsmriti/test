import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: any;

  constructor(private route: ActivatedRoute) {}
  public itemDetail:any;

  @Input()
  set products(value:any) {
    if(value) {
      this.itemDetail = value;
    }
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    // this.productId = this.route.paramMap.pipe(
    // map((params: ParamMap) => params.get('id'))
    console.log('array is', this.itemDetail);
  }
}
