import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

// COMPONENTES DE MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

// COMPONENTE DE ANGULAR
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[
    InicioSesionComponent,
    RegistroComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AuthModule { }
