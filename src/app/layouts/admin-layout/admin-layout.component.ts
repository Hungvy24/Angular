import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductComponent } from '../../components/productlist/product.component';
import { SidebarComponent } from '../../components/sidebar/siderbar.component';
import { NotFoundPageComponent } from '../../pages/not-found-page/not-found-page.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductComponent, SidebarComponent, NotFoundPageComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
