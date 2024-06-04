import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)] ),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  constructor(private toastr: ToastrService, private router: Router) {}

  handleSubmit() {
    if (this.registerForm?.get('password')?.value !== this.registerForm?.get('confirmPassword')?.value) {
      this.registerForm?.get('confirmPassword')?.setErrors({ mismatch: true });
      return;
    }
    const { fullname, email, password } = this.registerForm?.value || {};
    this.authService.register(fullname, email, password).subscribe({
      next: () => {
        this.registerForm.reset();
        // this.toastr.success('Đăng ký thành công');
        alert('Đăng ký thành công');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
