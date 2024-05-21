import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../type/product';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLink, NgIf],
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
  deleteProduct(id: number) {
    if(confirm('Bạn có muốn xóa')){
      this.productSevice.deleteProduct(id).subscribe(data => {
        this.productSevice.getAllProduct().subscribe(data => {
          this.products = data;
        })
      })
      alert('Bạn đã xóa thành công')
    }else{
      alert('Bạn đã hủy xóa')
    }
  }
  ngDoCheck() {
    console.log(this.products);

  }
}
