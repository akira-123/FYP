import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-afamosa',
  templateUrl: './afamosa.page.html',
  styleUrls: ['./afamosa.page.scss'],
})
export class AfamosaPage {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
