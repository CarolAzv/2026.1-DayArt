import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: 'html/app.html',
  styleUrl: 'css/app.css'
})
export class App {
  protected readonly title = signal('dayart');
}
