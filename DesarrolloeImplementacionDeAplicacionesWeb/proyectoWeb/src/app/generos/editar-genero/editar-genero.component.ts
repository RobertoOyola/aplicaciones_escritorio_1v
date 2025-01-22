import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroDTO, GenerosCreacionDTO } from '../generos';

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id! : number;

  genero:GeneroDTO = {id:1, nombre:'Drama'}

  guardarCambios(genero: GenerosCreacionDTO){
     console.log('Editar genero', genero);
     //console.log(this.form.value);
     //this.router.navigate(['/generos']);
   }
 

}
