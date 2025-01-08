import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actores',
  imports: [MatButtonModule],
  templateUrl: './crear-actores.component.html',
  styleUrl: './crear-actores.component.css'
})
export class CrearActoresComponent {
    router = inject(Router)
cancelarCambios() {
  this.router.navigate(['/actores']);
}
guardarCambios() {
  this.router.navigate(['/actores']);
}

}
