import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-langkawi',
  templateUrl: './langkawi.page.html',
  styleUrls: ['./langkawi.page.scss'],
})
export class LangkawiPage {

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
}
