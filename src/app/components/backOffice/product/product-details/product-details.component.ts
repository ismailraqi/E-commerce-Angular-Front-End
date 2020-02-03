import { Product } from 'src/app/Models/product.model';
import { Images } from './../../../../Models/images.model';
import { Reviews } from './../../../../Models/reviews.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:Product;
  id :number = 0;
  price:number
  

  constructor(private productService:ProductService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getProdId();
  }
  getProdId()
  {
    this.productService.getProdById(this.id).subscribe((res:Product)=>{
      this.products =res;
      this.price=res.Price
      console.log(this.price)
      
      console.log(res);
    });
  }
}
