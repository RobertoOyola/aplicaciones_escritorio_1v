import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CinesService } from '../../services/cines.service';
import { CoordenadasDTO } from '../cines';

@Component({
  selector: 'app-indice-cine',
  imports: [MatButtonModule,RouterLink,RouterLink, MatTableModule],
  templateUrl: './indice-cine.component.html',
  styleUrl: './indice-cine.component.css'
})
export class IndiceCineComponent {
  columnasMostrar: string[] = ["id", "nombre", "accion"];
    cines = inject(CinesService);
    listaCines!: CoordenadasDTO[];
  
    constructor(){
      this.cines.obtenerCines()
      .subscribe(actores =>{
        this.listaCines = actores;
        console.log(this.listaCines);
      })
    }//hola
}
