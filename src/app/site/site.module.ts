import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [CommonModule, SiteRoutingModule, MenubarModule],
})
export class SiteModule {}
