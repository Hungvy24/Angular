import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../type/product';
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
  route = inject(ActivatedRoute);
  productSevice = inject(ProductService);
  product! : Product | undefined;
  toastr = inject(ToastrService);
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
      this.toastr.success('Xóa thành công', 'Thành công')
      // alert('Bạn đã xóa thành công')
    }
    // else{
    //   alert('Bạn đã hủy xóa')
    // }
  }
  ngDoCheck() {
    console.log(this.products);

  }
}
