import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProductCreateComponent {
  productSevice = inject(ProductService)

  createProduct = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', []),
    price: new FormControl(0, [Validators.required, Validators.min(0),
      (control: AbstractControl): ValidationErrors | null => {
        const price = control.value;
        if (price <= 0) {
          return { greaterThanZero: true };
        }
        return null;
      }
    ]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private toastr: ToastrService) { }
  handleSubmit(){
    console.log(this.createProduct.value);
    // call API, chuyển trang, bật thông báo
    this.productSevice.createProducts(this.createProduct.value).subscribe({
      next: ()=>{
        console.log('create success');
        this.toastr.success('Tạo sản phẩm thành công', 'Thành công',{ positionClass: 'toast-top-right', closeButton: true, timeOut: 3000 })
        // chuyển trang
        this.router.navigate(['/admin/products/list']);
      },
      error: (error)=>{
        this.toastr.error(error.message, 'Thất bại', {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000
        });
        console.log(error.message);
      }
    })
  }
}
