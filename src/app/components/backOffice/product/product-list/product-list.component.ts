import { Categories } from './../../../../Models/categories.Model';
import { Product } from './../../../../Models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  categories:Categories[]=[];
  id :number = 0;
  idCat:number = 0;
  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private catService:CategoriesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getCatId();
    this.getAllCats();
    
  }
  getAllProd()
  {
    this.productService.getAllProduct().subscribe((res:Product[])=>{
      this.products = res;
      console.log(res);
    });
  }
  getCatId()
  {
    this.productService.getCatById(this.id).subscribe((res:Product[])=>{
      this.products =res;
      console.log(res);
    });
  }
  getAllCats()
  {
    this.catService.getAllCat().subscribe((res : Categories[])=>{
      this.categories = res;
      console.log(this.categories);
    });
  }
  tets()
  {
    this.idCat = this.route.snapshot.params.id;
  }
}
