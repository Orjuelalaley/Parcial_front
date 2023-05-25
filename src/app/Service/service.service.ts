import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../Modelo/Libro';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/libros';

  getLibros(){
    return this.http.get<Libro[]>(this.Url);
  }

  PostLibro(libro:Libro){
    return this.http.post<Libro>(this.Url,libro);
  }
}
