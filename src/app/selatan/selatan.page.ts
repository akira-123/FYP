import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selatan',
  templateUrl: './selatan.page.html',
  styleUrls: ['./selatan.page.scss'],
})
export class SelatanPage {

  constructor() { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

}
