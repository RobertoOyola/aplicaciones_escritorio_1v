import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActorCreacionDTO } from '../actores';
import { MatButtonModule } from '@angular/material/button';
import { FomularioActoresComponent } from '../fomulario-actores/fomulario-actores.component';

@Component({
  selector: 'app-crear-actor',
  imports: [MatButtonModule, FomularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {
  router = inject(Router);

  guardarCambios(actor: ActorCreacionDTO){
    console.log('Insertar Actor', actor);
    //console.log(this.form.value);
    //this.router.navigate(['/generos']);
  }
}