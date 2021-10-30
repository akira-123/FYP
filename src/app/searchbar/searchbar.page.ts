import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  public searchTerm: string ="";
  public items: any;



  constructor(private dataService: DataService, private route:Router) {}



  ngOnInit() {this.setFilteredItems();
  }
setFilteredItems(){
  this.items = this.dataService.filterItems(this.searchTerm);
  }

  onDirectPage(item){
    this.route.navigate(["/",item.link])

  }
  }
