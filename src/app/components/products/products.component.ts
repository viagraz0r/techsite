import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from 'src/app/services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private _productosService: ProductosService) {}

  ngOnInit() {
    this.productos = this._productosService.getProductos();
    console.log(this.productos);
  }
}
