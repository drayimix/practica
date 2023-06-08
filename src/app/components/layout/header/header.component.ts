import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})

export class HeaderComponent implements OnInit{
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(){
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-fw pi pi-box',
        routerLink: '/productos'
      },
      {
        label: 'Pedidos',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/pedidos'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi pi-user',
        routerLink: '/clientes'
      },
      {
        label: 'Ajustes',
        icon: 'pi pi-spin pi-cog',
        items: [
          {
            label: 'Generales',
            icon: 'pi pi-briefcase'
          },
          {
            label: 'Cerrar Sesion',
            icon: 'pi pi-times'
          },
        ]
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-info-circle'
      }
    ]
  }
}
