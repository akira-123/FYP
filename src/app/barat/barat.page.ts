import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barat',
  templateUrl: './barat.page.html',
  styleUrls: ['./barat.page.scss'],
})
export class BaratPage  {

  constructor() { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
