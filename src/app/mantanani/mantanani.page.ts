import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-mantanani',
  templateUrl: './mantanani.page.html',
  styleUrls: ['./mantanani.page.scss'],
})
export class MantananiPage{

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
