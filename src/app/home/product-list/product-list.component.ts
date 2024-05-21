import { Component, inject } from '@angular/core';
import { Product } from '../../type/product';
import { HomeService } from '../../services/productlist.service';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from '../../pages/product-detail/product-detail.component';
import { NotFoundPageComponent } from '../../pages/not-found-page/not-found-page.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink, NgIf, NotFoundPageComponent],
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
// }
// import { Component, inject } from '@angular/core';
// import { Product } from '../../type/product';
// import { HomeService } from '../../services/productlist.service';
// import { RouterLink, RouterOutlet, Routes } from '@angular/router';
// import { NgFor, NgIf } from '@angular/common';
// import { ProductDetailComponent } from '../../pages/product-detail/product-detail.component';
// import { NotFoundPageComponent } from '../../pages/not-found-page/not-found-page.component';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [RouterOutlet, NgFor, RouterLink, NgIf, NotFoundPageComponent],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class HomeComponent {
//   home: Product[] = [];
//   products: Product[] = []; // Define the products property
//   filteredProducts: Product[] = [];
//   productList = inject(HomeService);
//   searchTerm = '';
//   constructor() { }
//   ngOnInit(): void {
//     this.productList.getAllProductlist().subscribe(data => {
//       this.home = data;
//     })
//   }
//   onSearchTermChange(event: Event): void {
//     const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
//     this.searchTerm = searchTerm;

//     this.filteredProducts = this.products.filter(product =>
//       product.title.toLowerCase().includes(searchTerm) ||
//       product.description.toLowerCase().includes(searchTerm) // Add more search criteria if needed
//     );
//   }
//   ngDoCheck() {
//     console.log(this.home)
//   }

// }
