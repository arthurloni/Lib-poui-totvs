import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'clientes', loadComponent: () => import('./pages/clientes/clientes').then(m => m.Clientes) },
  { path: 'produtos', loadComponent: () => import('./pages/produtos/produtos').then(m => m.Produtos)},
  { path: 'pesagem', loadComponent: () => import('./pages/pesagem/pesagem').then(m => m.Pesagem)},
];