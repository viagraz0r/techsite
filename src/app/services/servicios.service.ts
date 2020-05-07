import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private servicios: Servicio[] = [
    {
      nombre: 'Soporte IT para Empresas',
      descripcion:
        'Se proporciona asistencia técnica y asesoramiento a clientes que dependen de equipos, aplicaciones informáticas y redes de comunicaciones. Nos acercamos al lugar donde se encuentra el equipo y solucionamos el problema in situ. Tambien se brinda soporte informático remoto, habitualmente con uso de un programa de control remoto y vía telefonica desde nuestro centro de ayuda.',
      img: 'assets/img/bg-soporteitempresas.png',
    },
    {
      nombre: 'Soporte Tecnico a domicilio en Hogares',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, qui suscipit. Deleniti ipsum, odit aperiam sint labore sit vitae totam nemo veritatis ullam cupiditate. Doloribus nam ullam illum doloremque enim?',
      img:
        'assets/img/soporte-tecnico-computadoras-tablets-laptops-domicilio.jpg',
    },
    {
      nombre: 'Instalacion de Cámaras de Seguridad',
      descripcion:
        'Contamos con personal altamente capacitado en la instalación de cámaras de CCTV para hogares, oficina o industria. Si desea realizar una instalación en su casa o comercio, lo invitamos a comunicarse con nosotros para que podamos asesorarlo. Puede comunicarse con nuestro personal por teléfono, email, formulario de contacto, o visitando nuestras oficinas de atención.',
      img: 'assets/img/cctv.jpg',
    },
    {
      nombre: 'Instalacion de Redes Informaticas',
      descripcion:
        'Si necesitas la instalar una red de ordenadores en su empresa o si quiere compartir documentos, archivos, carpetas o impresoras entre los equipos de la oficina, la solución es la instalacion de redes informaticas. Ya sea una red con cable o una red inalámbrica, podemos hacer el montaje del sistema para compartir la información de la empresa entre los trabajadores en sus ordenadores.',
      img: 'assets/img/redes.png',
    },
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getServicios() {
    return this.servicios;
  }
}

export interface Servicio {
  nombre: string;
  descripcion: string;
  img: string;
}
