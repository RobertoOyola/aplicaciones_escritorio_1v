import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule,MatButtonModule,MatToolbarModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


  router = inject(Router);

  irCines() {
    this.router.navigate(['/cines']);
  }

  irActores() {
    this.router.navigate(['/actores']);
  }
    
  
}
