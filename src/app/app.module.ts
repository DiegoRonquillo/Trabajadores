import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { AgregarTrabajadorComponent } from './agregar-trabajador/agregar-trabajador.component';
import { ListarTrabajadorComponent } from './listar-trabajador/listar-trabajador.component';
import { AgregarInvernaderoComponent } from './agregar-invernadero/agregar-invernadero.component';
import { ListarinvernaderosComponent } from './listarinvernaderos/listarinvernaderos.component';
import { AgregsrActividadComponent } from './agregsr-actividad/agregsr-actividad.component';
import { ListarActividadesComponent } from './listar-actividades/listar-actividades.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { CortesAgregarComponent } from './cortes-agregar/cortes-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadoresComponent,
    AgregarTrabajadorComponent,
    ListarTrabajadorComponent,
    AgregarInvernaderoComponent,
    ListarinvernaderosComponent,
    AgregsrActividadComponent,
    ListarActividadesComponent,
    AgregarUsuarioComponent,
    CortesAgregarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
