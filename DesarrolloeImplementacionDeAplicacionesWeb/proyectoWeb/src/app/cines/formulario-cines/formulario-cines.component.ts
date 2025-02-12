import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MapasComponent } from '../../compartidos/componentes/mapas/mapas.component';
import { CineCreacionDTO } from '../cines';
import { Coordenadas } from '../../compartidos/componentes/mapas/coordenadas';

@Component({
  selector: 'app-formulario-cines',
  imports: [MatFormFieldModule, MatFormField, ReactiveFormsModule, MatInputModule, MatButtonModule
    ,RouterLink, MapasComponent
  ],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css'
})
export class FormularioCinesComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadasIniciales.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud})
    }
  }

  @Input()
  modelo?: CineCreacionDTO;

  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  @Input()
  coordenadasIniciales: Coordenadas[] = [];

  private formBuilder= inject(FormBuilder);

  form= this.formBuilder.group({
    nombre: ['',[Validators.required]],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required])
  });

  coordenadasSeleccionadas(coordenadas: Coordenadas){
    this.form.patchValue(coordenadas);
  }

  obteneMensajeError(): string{
      let nombre = this.form.controls.nombre;
      if(nombre.hasError('required')){
        return "El campo es requerido";
      }else{
        return "";
      }
      
    }

  
    guardarCambios(){
      if(!this.form.valid){
        return;
      }
  
      const cine = this.form.value as CineCreacionDTO;
      this.posteoFormulario.emit(cine);
  
    }
  

}

