import { Component, OnInit } from '@angular/core';
import { ProductoI } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit{
  productos: ProductoI[]=[];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.mostrarProducto();
  }

  mostrarProducto(){
    this.productoService.getAllProducto().subscribe({next: (data) =>{
      this.productos = data.producto
      console.log(this.productos)
    }})
  }

  eliminarProducto(id: number){
    this.router.navigateByUrl('/productos')
    this.productoService.deleteProducto(id).subscribe(() => {
      this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Producto Eliminado', life:5000});
      this.mostrarProducto();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente')
    }
    );
  }

  imprimir(id: number){}
}
