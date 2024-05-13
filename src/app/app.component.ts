import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Thong tin sinh vien';
  // student ={
  //   ten: 'Nguyen Hung Vy',
  //   ngaysinh: '10/03/2004',
  //   diachi: 'Ha Noi',
  //   gioitinh: 'Nam',
  //   diemTB: 9.5
  // }
  // // invevtors: Inventor[] = [
  // //   {
  // //     id: 1, first: 'Vy', last: 'Nguyen', year: 2004, passed: 2010
  // //   },
  // //   {
  // //     id: 2, first: 'Huong', last: 'Nguyen', year: 2004, passed: 2011
  // //   },
  // //   {
  // //     id: 3, first: 'Huy', last: 'Nguyen', year: 2004, passed: 2012
  // //   },
  // //   {
  // //     id: 4, first: 'Cong', last: 'Nguyen', year: 2004, passed: 2013
  // //   },
  // //   {
  // //     id: 5, first: 'Bao', last: 'Nguyen', year: 2004, passed: 2014
  // //   },
  // //   {
  // //     id: 6, first: 'Dung', last: 'Nguyen', year: 2004, passed: 2015
  // //   }
  // // ]
}

