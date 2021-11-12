import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-pantairhu',
  templateUrl: './pantairhu.page.html',
  styleUrls: ['./pantairhu.page.scss'],
})
export class PantairhuPage  {

  constructor() { }

  slideOpts={
    loop:true
  };
  slidesDidLoad(slides:IonSlides){
    slides.startAutoplay();
  }
}
