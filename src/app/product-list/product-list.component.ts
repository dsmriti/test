import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(public api: ApiService, private router: Router) {
    this.showProducts();
  }
  products: any = [];
  
  title = 'product';
  showProducts() {
    this.api.getProducts().subscribe((data: any) =>
      //console.log(data["products"])
      this.products = data["products"]
    )
  }

  navigateToProduct(id:any) {
    this.router.navigate(['/list', id]);
    //this.router.getCurrentNavigation().extras.state;
   
  }

}