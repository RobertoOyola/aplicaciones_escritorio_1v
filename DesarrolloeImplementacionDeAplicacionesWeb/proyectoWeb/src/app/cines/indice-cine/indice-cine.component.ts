import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { GeneroDTO } from '../../generos/generos';
import { CinesService } from '../cines.service';
import { CineDTO } from '../cines';

@Component({
  selector: 'app-indice-cine',
  imports: [MatButtonModule,RouterLink,MatTableModule],
  templateUrl: './indice-cine.component.html',
  styleUrl: './indice-cine.component.css'
})
export class IndiceCineComponent {
columnasMostrar: string[] = ['Id', 'Nombre', 'Accion'];

  cines= inject(CinesService);
  listacines!: CineDTO[];

  constructor(){
    this.cines.obtenerCines()
                .subscribe(cines =>{
      this.listacines=cines;
      console.log(this.listacines);
    });
  }

}
