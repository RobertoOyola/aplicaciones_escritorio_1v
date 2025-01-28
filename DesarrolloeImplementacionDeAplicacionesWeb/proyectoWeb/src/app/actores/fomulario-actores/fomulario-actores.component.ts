import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fomulario-actores',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './fomulario-actores.component.html',
  styleUrls: ['./fomulario-actores.component.css']
})
export class FomularioActoresComponent implements OnInit {

  @Output() posteoFormulario = new EventEmitter<ActorCreacionDTO>();
  @Input() modelo?: ActorDTO;

  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    fechaNacimiento: ['', Validators.required],
    foto: [null as File | null, Validators.required]
  });

  selectedFileName: string | null = null;

  ngOnInit(): void {
    if (this.modelo) {
      this.form.patchValue({
        nombre: this.modelo.nombre,
        fechaNacimiento: this.modelo.fechaNacimiento,
        foto: this.modelo.foto ?? null
      });
    }
  }

  obtenerMensajeError(campo: string): string {
    const control = this.form.get(campo);
    if (!control) return '';

    if (control.hasError('required')) {
      return 'El campo es requerido';
    }
    if (control.hasError('minlength')) {
      return 'El nombre debe tener al menos 2 caracteres';
    }
    return '';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      
      // Validación de tipo y tamaño (1MB máximo como ejemplo)
      if (file.size > 1048576) {
        this.form.controls['foto'].setErrors({ tooLarge: true });
        this.selectedFileName = null;
        return;
      }

      this.form.patchValue({ foto: file });
      this.selectedFileName = file.name;
    }
  }

  guardarCambios(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const actor: ActorCreacionDTO = {
      nombre: this.form.value.nombre!,
      fechaNacimiento: this.form.value.fechaNacimiento!,
      foto: this.form.value.foto!
    };

    this.posteoFormulario.emit(actor);

    // Reset del formulario
    this.form.reset();
    this.selectedFileName = null;
  }
}
