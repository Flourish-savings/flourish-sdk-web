import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlourishComponent } from './flourish/flourish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlourishComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
