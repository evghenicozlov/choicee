import { Routes } from '@angular/router';
import { RootLayout } from './layouts/root-layout/root-layout';
import { ROOT_LAYOUT_ROUTES } from './layouts/root-layout/root-layout.routes';

export const routes: Routes = [
  {
    path: '',
    component: RootLayout,
    children: ROOT_LAYOUT_ROUTES,
  },
];
