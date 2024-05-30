import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class ProductUpdateComponent {
  productSevice = inject(ProductService)
  route = inject(ActivatedRoute)
  id!: string | undefined
  
  createProduct: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl('', [Validators.required, Validators.minLength(6)]),
    image: new FormControl('', []),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      this.productSevice.getProductDetail(param['id']).subscribe({
        next: (data) => {
          // update data vao addProductForm
          this.createProduct.patchValue(data);
        },
        error: (error) => {
          // show thong bao error
          this.toastr.error(error.message, 'Thất bại', {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
          console.error(error);
        },
      });
    });
  }

  handleSubmit() {
    console.log(this.createProduct.value);
    if (!this.id) return;
    this.productSevice
      .updateProduct(this.id, this.createProduct.value)
      .subscribe({
        next: () => {
          // console.log('thong bao + chuyen trang');
          this.toastr.success('Cập nhật sản phẩm thành công', 'Thành công', {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
          this.router.navigate(['/admin/products/list']);
        },
        error: (error) => {
          // show error
          this.toastr.error(error.message, 'Thất bại', {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
          console.error(error.message);
        },
      });
  }
}
