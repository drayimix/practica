import { Component, OnInit} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})

export class HeaderComponent implements OnInit{
  items: MenuItem[]=[];
  constructor(private messageService: MessageService) {}

  ngOnInit(){
    this.items=[
      {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    // this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    // this.delete();
                }
            }
        ]
      },
      {

      }
    ]
  }
}
