import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Modelo/Libro';

import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{


  Guardar() {

  }

  ngOnInit(): void {
  }

}
