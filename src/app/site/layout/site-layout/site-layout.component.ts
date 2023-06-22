import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
})
export class SiteLayoutComponent {
  items: MenuItem[] = [
    {
      label: 'Hakkımızda',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Vizyonumuz',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Misyonumuz',
          icon: 'pi pi-fw pi-trash',
        },
      ],
    },
  ];
}
