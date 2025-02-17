import { Component, inject } from '@angular/core';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { CineCreacionDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { Router } from '@angular/router';
import { CinesService } from '../cines.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crear-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
router = inject(Router);
   cinesService= inject(CinesService);
   private _snackBar = inject(MatSnackBar);

  guardarCambios(cine: CineCreacionDTO){
    console.log('Insertar cine', cine);
    this.cinesService.crearCine(cine).subscribe({
      next: (cine) =>{
         this.router.navigate(['/generos']);
         this.openSnackBar("Se guardo con exito el registro de cine");
      },
      error: (error:HttpErrorResponse) => {
        // Manejar el error 404 aquí
        if (error.error === 404) {
          
          this.openSnackBar("El cine no fue encontrado")
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
