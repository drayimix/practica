import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoI } from '../models/pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  api_url = 'http://localhost:4000';
  base_path = `${this.api_url}/pedidos/`
  base_path2 = `${this.api_url}/pedido/`

  constructor(private http: HttpClient) { }

  getAllPedido(): Observable<{pedido:PedidoI[]}>{
    return this.http.get<{pedido:PedidoI[]}>(this.base_path)
  }

  getOnepedido(id: number): Observable<{pedido:PedidoI[]}>{
    return this.http.get<{pedido:PedidoI[]}>(`${this.base_path2}${id}`)
  }

  createPedido(data:any): Observable<PedidoI>{
    return this.http.post<PedidoI>(this.base_path2, data)
  }

  updatePedido(id:number, data: PedidoI): Observable<PedidoI>{
    return this.http.put<PedidoI>(`${this.base_path2}${id}`, data)
  }

  deletePedido(id: number):Observable<PedidoI>{
    return this.http.delete<PedidoI>(`${this.base_path2}${id}`)
  }
}
