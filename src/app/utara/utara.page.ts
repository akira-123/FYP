import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utara',
  templateUrl: './utara.page.html',
  styleUrls: ['./utara.page.scss'],
})
export class UtaraPage {

  constructor() { }
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
