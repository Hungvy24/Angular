import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../type/product';
import { HomeService } from '../../services/productlist.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { NotFoundPageComponent } from '../../pages/not-found-page/not-found-page.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    RouterLink,
    NgIf,
    NotFoundPageComponent,
    BannerComponent,
    FooterComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class HomeComponent implements OnInit {
  home: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';
  productList = inject(HomeService);

  constructor() { }

  ngOnInit(): void {
    this.productList.getAllProductlist().subscribe(data => {
      this.home = data;
      this.filteredProducts = [...this.home];
    });
  }

  onSearch(searchText: string) {
    this.searchText = searchText;
    if (searchText) {
      this.filteredProducts = this.home.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.home];
    }
  }
}
