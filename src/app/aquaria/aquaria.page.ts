import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-aquaria',
  templateUrl: './aquaria.page.html',
  styleUrls: ['./aquaria.page.scss'],
})
export class AquariaPage{

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
