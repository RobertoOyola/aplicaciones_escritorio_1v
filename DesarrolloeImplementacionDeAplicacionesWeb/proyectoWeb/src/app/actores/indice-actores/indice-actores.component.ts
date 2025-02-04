import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../../services/actores.service';
import { ActorDTO } from '../actores';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

  columnasMostrar: string[] = ["id", "nombre","fechaNacimiento","foto", "accion"];
  actores = inject(ActoresService);
  listaActores!: ActorDTO[];

  constructor(){
    this.actores.obtenerActores()
    .subscribe(actores =>{
      this.listaActores = actores;
      console.log(this.listaActores);
    })
  }
}
