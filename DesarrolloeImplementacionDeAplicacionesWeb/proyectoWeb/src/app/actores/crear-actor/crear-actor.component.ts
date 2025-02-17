import { Component, inject } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';
import { Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent, MatButtonModule],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {

router = inject(Router);
   ActoresService= inject(ActoresService);
   private _snackBar = inject(MatSnackBar);

  guardarCambios(actor: ActorCreacionDTO){
    console.log('Insertar actor', actor);
    this.ActoresService.crearActor(actor).subscribe({
      next: (actor) =>{
         this.router.navigate(['/actores']);
         this.openSnackBar("Se guardo con exito el registro de genero");
      },
      error: (error:HttpErrorResponse) => {
        // Manejar el error 404 aquí
        if (error.error === 404) {
          
          this.openSnackBar("El actor no fue encontrado")
        } else {
         this.openSnackBar('Ocurrió un error desconocido');
        }
      }
    });
    //console.log(this.form.value);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "",{
      duration: 4 * 1000,
    });
  }
}