import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  items: MenuItem[] = [
    {
      label: 'Users',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Yeni',
          icon: 'pi pi-fw pi-plus',
        },
        {
          routerLink: 'users',
          label: 'Listele',
          icon: 'pi pi-fw pi-trash',
        },
      ],
    },
    {
      label: 'Roles',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Yeni',
          icon: 'pi pi-fw pi-plus',
        },
        {
          routerLink: 'roles',
          label: 'Listele',
          icon: 'pi pi-fw pi-trash',
        },
      ],
    },
  ];
}
