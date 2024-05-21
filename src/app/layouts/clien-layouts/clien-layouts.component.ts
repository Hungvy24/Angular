import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-clien-layouts',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './clien-layouts.component.html',
  styleUrl: './clien-layouts.component.css'
})
export class ClienLayoutsComponent {

}
