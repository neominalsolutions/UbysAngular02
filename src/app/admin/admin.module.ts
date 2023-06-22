import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MenubarModule } from 'primeng/menubar';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { UserGridComponent } from './pages/users-page/features/user-grid/user-grid.component';

@NgModule({
  declarations: [AdminLayoutComponent, UsersPageComponent, RolesPageComponent, UserGridComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MenubarModule,
    HttpClientModule,
    TableModule,
  ],
})
export class AdminModule {}
