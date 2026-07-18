import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { ROOT_LAYOUT_ROUTES } from './root-layout.routes';

@Component({
  selector: 'app-root-layout',
  imports: [RouterOutlet, NavigationBar],
  templateUrl: './root-layout.html',
  styleUrl: './root-layout.scss',
})
export class RootLayout {
  routes = ROOT_LAYOUT_ROUTES;
}
