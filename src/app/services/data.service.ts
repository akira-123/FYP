import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() {
    this.items = [
      {title: "Kuala Lumpur", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Kuala_Lumpur%2C_Malaysia.svg/1920px-Flag_of_Kuala_Lumpur%2C_Malaysia.svg.png",link:"kl"},
      {title: "Selangor", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Flag_of_Selangor.svg/1920px-Flag_of_Selangor.svg.png",link:"selangor"},
      {title: "Sabah", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Sabah.svg/1920px-Flag_of_Sabah.svg.png", link:"sabah"},
      {title: "Terengganu", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Terengganu.svg/1920px-Flag_of_Terengganu.svg.png", link:"terengganu"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}