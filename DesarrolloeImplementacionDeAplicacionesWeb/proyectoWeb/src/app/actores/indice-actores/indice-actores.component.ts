import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

  router = inject(Router);

  irCrearActor() {
    this.router.navigate(['/actores/crear']);
}

cancelarCambios() {
    this.router.navigate(['/']);
  }

}
