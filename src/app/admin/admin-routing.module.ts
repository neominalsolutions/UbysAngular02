import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersPageComponent,
      },
      {
        path: 'users-detail',
        component: UserDetailPageComponent,
      },
      {
        path: 'users/:id/:name',
        component: UserDetailPageComponent,
        data: {
          title: 'User Detail',
          permissions: ['createUser', 'updateUser', 'downloadReport'],
        },
      },

      {
        path: 'roles',
        component: RolesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
