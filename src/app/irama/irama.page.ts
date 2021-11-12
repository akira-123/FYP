import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-irama',
  templateUrl: './irama.page.html',
  styleUrls: ['./irama.page.scss'],
})
export class IramaPage{

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
