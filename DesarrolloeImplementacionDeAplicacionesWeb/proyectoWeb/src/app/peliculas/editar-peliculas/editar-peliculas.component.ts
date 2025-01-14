import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-peliculas',
  imports: [],
  templateUrl: './editar-peliculas.component.html',
  styleUrl: './editar-peliculas.component.css'
})
export class EditarPeliculasComponent {
  @Input({transform: numberAttribute}) 
  Id! : number;
}
