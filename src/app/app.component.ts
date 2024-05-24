import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first, last } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/productlist/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

