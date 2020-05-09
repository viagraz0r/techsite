import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AboutComponent } from './components/about/about.component';
import { PartsComponent } from './components/parts/parts.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parts', component: PartsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
