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
        label: 'login',
        icon: 'pi pi-fw pi pi-user'
      },
      {
        label: 'Register',
        icon: 'pi pi-fw pi-user-edit'
      },
      {
        label: 'Settings',
        icon: 'pi pi-spin pi-cog'
      },
      {
        label: 'Help',
        icon: 'pi pi-info-circle'
      }
    ]
  }
}
