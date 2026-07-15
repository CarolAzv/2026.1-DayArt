import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './html/app.html',
  styleUrls: ['./html/css/app.css']
})

export class App {
  protected readonly local = signal('Menu Principal');
}