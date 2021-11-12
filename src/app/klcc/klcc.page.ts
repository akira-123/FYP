import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-klcc',
  templateUrl: './klcc.page.html',
  styleUrls: ['./klcc.page.scss'],
})
export class KlccPage {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
