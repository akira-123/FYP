import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-kinabalu',
  templateUrl: './kinabalu.page.html',
  styleUrls: ['./kinabalu.page.scss'],
})
export class KinabaluPage {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
