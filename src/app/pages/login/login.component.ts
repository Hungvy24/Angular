import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private toastr: ToastrService, private router: Router) {}

  handleLogin() {
    const { email, password } = this.loginForm.value || {};

    this.authService.login(email, password).subscribe({
      next: () => {
        this.loginForm.reset(); // reset form
        // this.toastr.success('Đăng nhập thành công');
        alert('Đăng nhập thành công');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.toastr.error('Đăng nhập thất bại!', 'Error'); // Or handle error display differently
      }
    });
  }
}
