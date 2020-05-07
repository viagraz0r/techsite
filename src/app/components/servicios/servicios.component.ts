import { Component, OnInit } from '@angular/core';
import { ServiciosService, Servicio } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private _serviciosService: ServiciosService) {}

  ngOnInit() {
    this.servicios = this._serviciosService.getServicios();
    console.log(this.servicios);
  }
}
