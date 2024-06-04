import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { CreateProduct, Product } from '../../../../type/product';
import { NgFor, NgIf } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLink, NgIf,ToastrModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProductListComponent {
  products : Product[] = [];
  createProduct: CreateProduct[]=[];
  route = inject(ActivatedRoute);
  productSevice = inject(ProductService);
  product! : Product | undefined;
  toastr = inject(ToastrService);
  ngOnInit() {
    this.productSevice.getAllProduct().subscribe(data => {
      this.products = data;
    })
  }
  addProduct() {
    this.productSevice.getAllCreate().subscribe(data => {
      this.createProduct = data;
    })
  }
  deleteProduct(id: number) {
    if(confirm('Bạn có muốn xóa')){
      this.productSevice.deleteProduct(id).subscribe(data => {
        this.productSevice.getAllProduct().subscribe(data => {
          this.products = data;
        })
      })
      this.toastr.success('Xóa thành công', 'Thành công',{ positionClass: 'toast-top-right', closeButton: true, timeOut: 3000 })
    }else{
      this.toastr.error('Bạn đã hủy xóa', 'Thất bại',{ positionClass: 'toast-top-right', closeButton: true, timeOut: 3000 })
    }
  }
  updateProduct(id: number) {
    this.productSevice.getProductDetail(id).subscribe(data => {
      this.product = data;
    })
  }
  ngDoCheck() {
    console.log(this.products);

  }
}
