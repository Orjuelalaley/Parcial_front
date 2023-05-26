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

  libro: any = {};


  constructor(private router:Router, private service:ServiceService) { }

  Guardar() {
    this.service.PostLibro(this.libro)
      .subscribe(data => {
        alert("Se agrego con Exito...!!!");
        this.router.navigate(["listar"]);
      })

  }

  ngOnInit(): void {
  }

}
