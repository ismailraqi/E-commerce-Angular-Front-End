import { Categories } from './../../../Models/categories.Model';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories : Categories [] =[];
  constructor(private catService:CategoriesService) { }

  ngOnInit() 
  {
    this.getAllCats();
  }
  getAllCats()
  {
    this.catService.getAllCat().subscribe((res : Categories[])=>{
      this.categories = res;
      console.log(this.categories);
    });
  }
}
