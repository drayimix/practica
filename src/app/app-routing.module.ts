import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { MostrarPedidoComponent } from './components/pedido/mostrar-pedido/mostrar-pedido.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "productos",
    component: MostrarProductoComponent
  },
  {
    path: "pedidos",
    component: MostrarPedidoComponent
  },
  {
    path: "clientes",
    component: MostrarClienteComponent
  },
  {
    path: "addclientes",
    component: CrearClienteComponent
  },
  {
    path: "clientes/edit/:id",
    component: ActualizarClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
