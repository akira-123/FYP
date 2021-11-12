import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-klebang',
  templateUrl: './klebang.page.html',
  styleUrls: ['./klebang.page.scss'],
})
export class KlebangPage  {

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
