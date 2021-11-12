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
      {title: "Sarawak", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flag_of_Sarawak.svg/1024px-Flag_of_Sarawak.svg.png", link:"sarawak"},
      {title: "Terengganu", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Terengganu.svg/1920px-Flag_of_Terengganu.svg.png", link:"terengganu"},
      {title: "Kelantan", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Flag_of_Kelantan.svg/1024px-Flag_of_Kelantan.svg.png", link:"kelantan"},
      {title: "Pahang", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Pahang.svg/1024px-Flag_of_Pahang.svg.png", link:"pahang"},
      {title: "Perlis", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Perlis.svg/1024px-Flag_of_Perlis.svg.png", link:"perlis"},
      {title: "Kedah", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Flag_of_Kedah.svg/1024px-Flag_of_Kedah.svg.png", link:"kedah"},
      {title: "Melaka", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Malacca.svg/1024px-Flag_of_Malacca.svg.png", link:"melaka"},
      {title: "Negeri Sembilan", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_Negeri_Sembilan.svg/1024px-Flag_of_Negeri_Sembilan.svg.png", link:"nsembilan"},
      {title: "Pulau Pinang", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Penang_%28Malaysia%29.svg/1024px-Flag_of_Penang_%28Malaysia%29.svg.png", link:"ppinang"},
      {title: "Johor", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Johor.svg/1024px-Flag_of_Johor.svg.png", link:"johor"},
      {title: "perak", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Perak.svg/1024px-Flag_of_Perak.svg.png", link:"perak"},
    ];
   }

   filterItems(searchTerm) {
     return this.items.filter(item => {
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
}