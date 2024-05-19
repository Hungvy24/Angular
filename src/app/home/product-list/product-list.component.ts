import { Component, inject } from '@angular/core';
import { Product } from '../../type/product';
import { HomeService } from '../../services/productlist.service';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class HomeComponent {
  home: Product[] = [];
  productList = inject(HomeService);
  constructor() { }

  ngOnInit(): void {
    this.productList.getAllProductlist().subscribe(data => {
      this.home = data;
    })
  }
  ngDoCheck() {
    console.log(this.home)
  }

}
