import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imágenes y archivos

//Modulo global
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
