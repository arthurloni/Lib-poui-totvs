import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PoToolbarModule, PoMenuModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home' },
    { label: 'Clientes', link: '/clientes' },
  ];
}