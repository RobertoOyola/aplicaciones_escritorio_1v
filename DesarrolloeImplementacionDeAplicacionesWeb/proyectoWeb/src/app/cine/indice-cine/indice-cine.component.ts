import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-cine',
  imports: [MatButtonModule],
  templateUrl: './indice-cine.component.html',
  styleUrl: './indice-cine.component.css'
})
export class IndiceCineComponent {


  router= inject(Router);

irCrearCine() {
  this.router.navigate(['/cines/crear']);
}

cancelarCambios() {
  this.router.navigate(['/']);
  }

}
