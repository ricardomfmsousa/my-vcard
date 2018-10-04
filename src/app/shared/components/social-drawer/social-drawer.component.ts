import { SocialDrawerItem } from './social-drawer-item.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-drawer',
  templateUrl: './social-drawer.component.html',
  styleUrls: ['./social-drawer.component.scss']
})
export class SocialDrawerComponent {
  @Input()
  public items: SocialDrawerItem[];
  constructor() {}

  public isLink(action: string | Function): boolean {
    return typeof action === 'string';
  }

  public handleClickAction(action: string | Function): void {
    if (typeof action === 'function') {
      action();
    }
  }
}
