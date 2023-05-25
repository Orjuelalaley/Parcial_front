import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './libro/listar/listar.component';
import { AgregarComponent } from './Libro/agregar/agregar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'add',component:AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
