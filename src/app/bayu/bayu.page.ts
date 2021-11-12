import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-bayu',
  templateUrl: './bayu.page.html',
  styleUrls: ['./bayu.page.scss'],
})
export class BayuPage {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
