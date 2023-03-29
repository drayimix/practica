import { Component, OnInit } from '@angular/core';
// import { MegaMenuItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
    // items: MegaMenuItem[]=[];
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
          },
          {
            items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Bookmark',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-fw pi-video'
                      }
                  ]
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
          }

    // ngOnInit() {
    //     this.items = [
    //         {
    //             label: 'Ciudades',
    //             icon: 'pi pi-fw pi-video',
    //             items: [
    //                 [
    //                     {
    //                         label: 'New york',
    //                         items: [{ label: 'Ver New york' }]
    //                     },
    //                     {
    //                         label: 'Tokyo',
    //                         items: [{ label: 'Ver tokyo' }]
    //                     }
    //                 ],
    //                 [
    //                     {
    //                         label: 'Londres',
    //                         items: [{ label: 'Ver Londres' }]
    //                     },
    //                     {
    //                         label: 'Venecia',
    //                         items: [{ label: 'Ver Venecia' }]
    //                     }
    //                 ],
    //                 [

    //                 ]
    //             ]
    //         },
    //       ]
    // }
  //   ngOnInit() {
  //     this.items = [
  //       {
  //         label: 'Clientes',
  //         icon: 'pi pi-fw pi-file',
  //         items: [
  //             {
  //                 label: 'Mostrar Cliente',
  //                 icon: 'pi pi-fw pi-plus',
                  
  //             },
  //             {
  //                 label: 'Crear Cliente',
  //                 icon: 'pi pi-fw pi-trash'
  //             },
  // {
  //                 label: 'Editar Cliente',
  //                 icon: 'pi pi-fw pi-external-link'
  //             },
  //             {
  //                 label: 'Eliminar Cliente',
  //                 icon: 'pi pi-fw pi-external-link'
  //             }
  //         ]
  //     },
  //     ]
  //   }
        ]
      }
}
