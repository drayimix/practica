import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/productos/`
  base_path2 = `${this.api_url}/producto/`

  constructor(private http: HttpClient) { }

  getAllProducto(): Observable<{producto:ProductoI[]}>{
    return this.http.get<{producto:ProductoI[]}>(this.base_path)
  }

  getOneProducto(id: number): Observable<{producto:ProductoI[]}>{
    return this.http.get<{producto:ProductoI[]}>(`${this.base_path2}${id}`)
  }

  createProducto(data:any): Observable<ProductoI>{
    return this.http.post<ProductoI>(this.base_path2, data)
  }

  updateProducto(id:number, data: ProductoI): Observable<ProductoI>{
    return this.http.put<ProductoI>(`${this.base_path2}${id}`, data)
  }

  deleteProducto(id: number):Observable<ProductoI>{
    return this.http.delete<ProductoI>(`${this.base_path2}${id}`)
  }
}
