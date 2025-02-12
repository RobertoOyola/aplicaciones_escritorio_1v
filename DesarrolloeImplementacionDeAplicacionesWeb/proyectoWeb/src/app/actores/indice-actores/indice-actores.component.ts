import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { ActorDTO } from '../actores';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
columnasMostrar: string[] = ['Id', 'Nombre','fechaNacimiento','Foto', 'Accion'];

  actor= inject(ActoresService);
  listaActor!: ActorDTO[];

  constructor(){
    this.actor.obtenerActores()
                .subscribe(actor =>{
      this.listaActor=actor;
      console.log(this.listaActor);
    });
  }
}
