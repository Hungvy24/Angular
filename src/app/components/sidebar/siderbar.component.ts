import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './siderbar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
