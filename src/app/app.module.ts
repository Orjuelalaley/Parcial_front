import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { ListarComponent } from './libro/listar/listar.component';
import { AgregarComponent } from './Libro/agregar/agregar.component';
@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    ListarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
