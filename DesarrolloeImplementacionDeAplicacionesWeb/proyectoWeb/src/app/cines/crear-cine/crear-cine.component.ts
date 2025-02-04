import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapasComponent } from '../../compartidos/componentes/mapas/mapas.component';
import { Coordenadas } from '../../compartidos/componentes/mapas/coordenadas';
import { GeneroDTO } from '../../generos/generos';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-cine',
  imports: [MapasComponent, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent implements OnInit {
  @Input() modelo?: Coordenadas;
  @Output() posteoFormulario = new EventEmitter<Coordenadas>();

  // Ref a MapasComponent para obtener las coordenadas
  @ViewChild(MapasComponent) mapaComponent!: MapasComponent;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    latitud: [0],
    longitud: [0]
  });

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  // Método para obtener el mensaje de error del formulario
  obteneMensajeError(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El campo es requerido';
    } else {
      return '';
    }
  }

  // Método para actualizar las coordenadas cuando se selecciona en el mapa
  actualizarCoordenadas(coordenadas: Coordenadas) {
    this.form.controls.latitud.setValue(coordenadas.latitud || 0);  // Asignamos 0 si no hay valor válido
    this.form.controls.longitud.setValue(coordenadas.longitud || 0); // Asignamos 0 si no hay valor válido
  }
  

  // Método para manejar la lógica de guardar cambios
  guardarCambios() {
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;

    const datosFormulario = {
      nombre: formData.nombre,
      latitud: formData.latitud,
      longitud: formData.longitud
    };

    console.log('Datos guardados:', datosFormulario);
// Emitimos el objeto con los datos
  }
}
