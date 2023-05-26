import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../Service/service.service";
import {Libro} from "../../Modelo/Libro";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  libros:Libro[] = [];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getLibros()
      .subscribe(data=>{
        this.libros=data;
      })
  }


}
