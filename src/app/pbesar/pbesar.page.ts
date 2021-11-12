import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-pbesar',
  templateUrl: './pbesar.page.html',
  styleUrls: ['./pbesar.page.scss'],
})
export class PbesarPage  {

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
}
