import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timur',
  templateUrl: './timur.page.html',
  styleUrls: ['./timur.page.scss'],
})
export class TimurPage  {

  constructor() { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
