import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-panjang',
  templateUrl: './panjang.page.html',
  styleUrls: ['./panjang.page.scss'],
})
export class PanjangPage  {

  constructor() { }
  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }

}
