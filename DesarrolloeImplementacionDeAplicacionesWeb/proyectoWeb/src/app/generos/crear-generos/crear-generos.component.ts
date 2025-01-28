import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosCreacionDTO } from '../generos';


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router);

  guardarCambios(genero: GenerosCreacionDTO){
    console.log('Insertar genero', genero);
    //console.log(this.form.value);
    //this.router.navigate(['/generos']);
  }


 

}
