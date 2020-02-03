import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get("http://localhost:51603/api/Product",{
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('userToken')
      })
    });
  }
  getCatById(id)
  {
    return this.http.get(`http://localhost:51603/Category/${id}`);
  }

  getProdById(id)
  {
    return this.http.get(`http://localhost:51603/Product/${id}`)
  }
}

