import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product [] = [];
  constructor(private productService:ProductService) { }



  ngOnInit() 
  {
    console.log(localStorage)
    this.getProducts()
  }

  getProducts(){
    this.productService.getAllProduct().subscribe((res:Product[])=>{
      this.products = res;
      console.log(res);
    });
  }

}
