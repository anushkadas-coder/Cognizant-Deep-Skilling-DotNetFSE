import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- 1. Yeh import add kijiye

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // <-- 2. Imports array mein isey daal dein
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}