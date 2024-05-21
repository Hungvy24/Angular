import { Component, inject } from '@angular/core';
import { Product } from '../../type/product';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 route = inject(ActivatedRoute);
 productSevice = inject(ProductService);
 product! : Product | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.productSevice.getProductDetail(params['id']).subscribe({
        next: (data) => {
          console.log(data);
          this.product = data;
        },
        error: (error) => {
          console.log(error);
        }

      })
  })
  }
}
