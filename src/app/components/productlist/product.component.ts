import { NgFor } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../../type/product';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet , NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  @Input() product: any; // or specify the type of product if you know it
}
