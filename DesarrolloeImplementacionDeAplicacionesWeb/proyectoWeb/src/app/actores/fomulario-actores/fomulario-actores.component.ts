import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActorCreacionDTO, ActorDTO } from '../actores';

@Component({
  selector: 'app-fomulario-actores',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './fomulario-actores.component.html',
  styleUrls: ['./fomulario-actores.component.css']
})
export class FomularioActoresComponent implements OnInit {
  
  ngOnInit(): void {
    if (this.modelo) {
      this.form.patchValue({
        nombre: this.modelo.nombre,
        fechaNacimiento: this.modelo.fechaNacimiento,
        foto: this.modelo.foto ?? null
      });
    }
  }

  @Output() posteoFormulario = new EventEmitter<ActorCreacionDTO>();
  @Input() modelo?: ActorDTO;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    foto: [null as File | null, Validators.required] // Explicitly allow null or File type
  });
  

  obtenerMensajeError(campo: string): string {
    const control = this.form.get(campo);
    if (control?.hasError('required')) {
      return 'El campo es requerido';
    }
    return '';
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.form.patchValue({ foto: file });
    }
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    this.posteoFormulario.emit(actor);
  }
}
