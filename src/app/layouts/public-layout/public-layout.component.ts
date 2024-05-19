import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../../components/productlist/product.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Product } from '../../type/product';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, NgFor, ProductComponent, HeaderComponent, FooterComponent, BannerComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css'
})
export class PublicLayoutComponent {
  products: Product[] = [];
  // productlist = inject(ProductlistService);
  // constructor() { }

  // handleProductlist(products: Product[]) {

  // }
  // ngDoCheck(){
  //   console.log(this.products);
  // }
}
