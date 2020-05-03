//Modulos
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Rutas
import { AppRoutingModule } from "./app-routing.module";
//Componentes
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { AboutComponent } from "./components/about/about.component";
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ServiciosComponent,
    AboutComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
