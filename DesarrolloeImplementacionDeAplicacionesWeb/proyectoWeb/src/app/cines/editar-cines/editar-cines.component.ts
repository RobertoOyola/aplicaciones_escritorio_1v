import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { CinesService } from '../cines.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent implements OnInit {

  ngOnInit(): void {
      this.obtenerCinesPorId();
  }

  @Input({transform: numberAttribute})
  id! : number;
  cine? : CineDTO;
  cineService = inject(CinesService);
  router = inject(Router)
  
  guardarCambios(cine: CineCreacionDTO){
    this.cineService.actualizarCine(this.id, cine).subscribe({
      next: () =>{
        this.router.navigate(['/cines']);
      },
      error: (error:HttpErrorResponse)=>{
        console.log(error);
      }
    })
    
  }

  obtenerCinesPorId(){
    this.cineService.ObtenerCinePorId(this.id).subscribe((cine)=>{
      console.log(cine);
      this.cine = cine
    });
  }

}
