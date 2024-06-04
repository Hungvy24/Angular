import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class ProductCreateComponent {
  productSevice = inject(ProductService);
  createProduct: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    thumbnail: new FormControl('', []),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0),
      (control: AbstractControl): ValidationErrors | null => {
        const price = control.value;
        if (price <= 0) {
          return { greaterThanZero: true };
        }
        return null;
      },
    ]),
    category: new FormControl('', [Validators.required]),
    active: new FormControl(require, []),
  });

  myform: FormGroup = new FormGroup({});
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}
  handleSubmit() {
    if (this.createProduct.invalid) {
      this.createProduct.markAllAsTouched();
      return;
    }
    const price = this.createProduct.get('price')?.value;
    if (price && price < 1) {
      this.toastr.error('Giá không hợp lệ', 'Thất bại', {
        positionClass: 'toast-top-right',
        closeButton: true,
        timeOut: 3000,
      });
      return;
    }
    console.log(this.createProduct.value);
    // call API, chuyển trang, bật thông báo
    this.productSevice.createProducts(this.createProduct.value).subscribe({
      next: () => {
        console.log('create success');
        this.toastr.success('Tạo sản phẩm thành công', 'Thành công', {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000,
        });
        // chuyển trang
        this.router.navigate(['/admin/products/list']);
      },
      error: (error) => {
        // this.toastr.error(error.message, 'Thất bại', {
        //   positionClass: 'toast-top-right',
        //   closeButton: true,
        //   timeOut: 3000
        // });
        console.log(error.message);
      },
    });
  }
  image: string = '';

  handleImageChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  ngOnInit() {
    this.myform = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      image: ['', []],
      price: [
        '',
        [
          Validators.required,
          Validators.min(0),
          (control: AbstractControl): ValidationErrors | null => {
            const price = control.value;
            if (price <= 0) {
              return { greaterThanZero: true };
            }
            return null;
          },
        ],
      ],
      category: ['', [Validators.required]],
    });
    // this.myform = this.fb.group({
    //   active: [false]
    // });
  }
}
