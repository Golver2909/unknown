import { Component } from '@angular/core';
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, SwiperOptions, Swiper} from 'swiper';
import { interval } from 'rxjs';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  slides = [
    {
         link: 'https://www.google.com',
         image: '../../../../../assets/Yugioh_anime_logo.webp',
    },
    {
         link: 'https://www.youtube.com',
         image: '../../../../../assets/860fe3735308ef5c206aedb61437da133dbfaee13cc32b12.avif',
    },
    {
         link: 'https://www.facebook.com',
         image: '../../../../../assets/Master-Duel-Logo.webp',
    },
    ];
    
  
}
