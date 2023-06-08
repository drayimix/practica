import { Component, OnInit } from '@angular/core';
import { PedidoI } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-pedido',
  templateUrl: './mostrar-pedido.component.html',
  styleUrls: ['./mostrar-pedido.component.css']
})
export class MostrarPedidoComponent implements OnInit{
  pedidos: PedidoI[]=[];

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.mostrarPedidos();
  }

  mostrarPedidos(){
    this.pedidoService.getAllPedido().subscribe({next: (data)=>{
      this.pedidos = data.pedido
      console.log(this.pedidos)
    }})
  }

  eliminarPedido(id: number){
    this.router.navigateByUrl('/pedidos')
    this.pedidoService.deletePedido(id).subscribe(()=>{
      this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Pedido Eliminado', life:5000});
      this.mostrarPedidos();
    },    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente')
    })
  }

  imprimir(id: number){}
}
