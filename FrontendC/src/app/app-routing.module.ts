import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { FashionTwoComponent } from './home/fashion/fashion-two/fashion-two.component';

import { MujerComponent } from './home/fashion/mujer/mujer.component';
import { LoginComponent } from './pages/account/login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: FashionTwoComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**', // Navigate to Home Page if not found any page
    redirectTo: 'pages/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
