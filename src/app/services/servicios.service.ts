import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private servicios: Servicio[] = [
    {
      nombre: 'Soporte Tecnico a domicilio en Hogares',
      descripcion:
        'Formateo de Computadoras, Instalacion de Programas, Mantenimiento Preventivo, Recuperacion de Archivos, Instalacion de Juegos. Asesoria en cuanto a mejoras para un mayor rendimiento de su equipo.',
      img:
        'assets/img/soporte-tecnico-computadoras-tablets-laptops-domicilio.jpg',
    },
    {
      nombre: 'Instalacion de Cámaras de Seguridad',
      descripcion:
        'Se realizan instalaciones de cámaras para hogares, oficina o industria. Lo invitamos a comunicarse para poder asesorarlo.',
      img: 'assets/img/cctv.jpg',
    },
    {
      nombre: 'Instalacion de Redes Estructuradas',
      descripcion:
        'Si necesitas instalar una red en tu empresa o si quiere compartir documentos, archivos, carpetas o impresoras entre los equipos de la oficina, la solución es la instalacion de redes informaticas. Ya sea una red cableada o inalámbrica.',
      img: 'assets/img/redes.png',
    },
    {
      nombre: 'Soporte Tecnico para Empresas',
      descripcion:
        'Se proporciona asistencia técnica. Nos acercamos al lugar donde se encuentra el equipo y solucionamos el problema in situ. Tambien se brinda soporte informático remoto, haciendo uso de un programa de control remoto y vía telefonica.',
      img: 'assets/img/bg-soporteitempresas.png',
    },
  ];

  constructor() {}

  getServicios() {
    return this.servicios;
  }
}

export interface Servicio {
  nombre: string;
  descripcion: string;
  img: string;
}
