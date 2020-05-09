import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    {
      nombre: 'Venta de Partes de Computadoras',
      descripcion:
        'Adquiere los componentes internos para tu equipo, ya sea que necesites reemplazar alguno que se te haya dañado, si lo que deseas es mejorar tu PC o Laptop o armar un equipo nuevo con tus especificaciones deseadas.',
      img: 'assets/img/venta-de-partes-de-computadoras.jpg',
    },
  ];

  constructor() {}

  getProductos() {
    return this.productos;
  }
}
export interface Producto {
  nombre: string;
  descripcion: string;
  img: string;
}
