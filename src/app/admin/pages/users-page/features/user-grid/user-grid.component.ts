import { Component, Input } from '@angular/core';
import { User } from '../../../_models/user.model';

export type TableSize = 'md' | 'lg' | 'xs' | 's'; // string literal Types

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent {
  @Input() DataSource: User[] = [];
  @Input() size: TableSize = 'md';
  @Input() headerColor: string = 'blue';
}
