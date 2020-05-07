import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productos: Producto[] = [
    {
      nombre: 'Venta de Partes de Computadoras',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaexercitationem voluptatibus cumque numquam eaque velit repellendus laudantium odio nostrum quod, maiores fugiat est cupiditate eos laborum unde ut eveniet excepturi.',
      img: 'assets/img/venta-de-partes-de-computadoras.jpg',
    },
    {
      nombre: 'Venta de Laptops',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque laborum a esse consequatur eos beatae dicta ipsum fugiat tempora consectetur assumenda reprehenderit quam quae, asperiores necessitatibus! Iure, ab quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi veritatis veniam sint quibusdam atque labore dolores magnam nostrum nihil dolorem unde, culpa temporibusvoluptate, nemo reprehenderit placeat amet saepe.',
      img: 'assets/img/laptops.jpg',
    },
    {
      nombre: 'Venta de Monitores',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque laborum a esse consequatur eos beatae dicta ipsum fugiat tempora consectetur assumenda reprehenderit quam quae, asperiores necessitatibus! Iure, ab quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi veritatis veniam sint quibusdam atque labore dolores magnam nostrum nihil dolorem unde, culpa temporibusvoluptate, nemo reprehenderit placeat amet saepe. ',
      img: './assets/img/monitores.jpg',
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
