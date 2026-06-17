import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div style="background: #F0F2F5; min-height: 100vh; margin: 0;">
      <app-header></app-header>
      <router-outlet></router-outlet> 
    </div>
  `
})
export class App {}