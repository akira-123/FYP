import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-cahaya',
  templateUrl: './cahaya.page.html',
  styleUrls: ['./cahaya.page.scss'],
})
export class CahayaPage {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
