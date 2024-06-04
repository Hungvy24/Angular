import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { Product } from '../../type/product';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BannerComponent, FormsModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  constructor() { }
  filterValue: string = '';
  // filter(){
  //   this.products =this. filteredProducts. filter(product => product.title.toLowerCase().includes(this.filterValue.toLowerCase()));
  // }

  onSearch(searchText: string) {
    this.searchText = searchText;
    if (searchText) {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

}
