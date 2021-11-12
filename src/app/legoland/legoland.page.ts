import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-legoland',
  templateUrl: './legoland.page.html',
  styleUrls: ['./legoland.page.scss'],
})
export class LegolandPage  {

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
