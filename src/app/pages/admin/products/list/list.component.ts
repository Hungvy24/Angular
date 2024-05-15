import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../type/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProductListComponent {
  products : Product[] = [];
  productSevice = inject(ProductService);

  ngOnInit() {
    this.productSevice.getAllProduct().subscribe(data => {
      this.products = data;
    })
  }
  ngDoCheck() {
    console.log(this.products);

  }
}
