import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//Componentes locales
import { CarouselComponent } from './components/carousel/carousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

//Vistas locales
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    CarouselComponent,
    NosotrosComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports:[
    CarouselComponent,
    NosotrosComponent,
    MainComponent
  ]
})
export class InicioModule { }
