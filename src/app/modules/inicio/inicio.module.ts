import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { SwiperModule } from 'swiper/angular';

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
    InicioRoutingModule,
    SwiperModule
  ],
  exports:[
    CarouselComponent,
    NosotrosComponent,
    MainComponent,
    SwiperModule
  ]
})
export class InicioModule { }
