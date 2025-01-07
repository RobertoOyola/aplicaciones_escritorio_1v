import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHijoComponent } from './app-hijo/app-hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHijoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'claseNumeroTres';

  coleccion =['Yoslen','Davila','Esteban','Roberto','Samuel','Joel'  ]

  diaDeLaSemana: string='';
  textoDesdeElPadre: string='Hola desde el Padre';

  textoQueEscuchaElPadreQueEnviaElHijo!: string;

  recibirMensajeDelHijo($event: string) {
    this.textoQueEscuchaElPadreQueEnviaElHijo=$event;
  }

  arregloProfesional = [
    {nombre:'Joslen',fechaNacimiento: new Date('2000-05-12'),sueldo:1200},
    {nombre:'Juan',fechaNacimiento: new Date('2000-04-12'),sueldo:1500},
    {nombre:'Roberto',fechaNacimiento: new Date('2000-03-12'),sueldo:2000},
    {nombre:'Joel',fechaNacimiento: new Date('2000-05-12'),sueldo:1600},
    {nombre:'Esteban',fechaNacimiento: new Date('2000-02-12'),sueldo:900},
    {nombre:'Samuel',fechaNacimiento: new Date('2000-01-12'),sueldo:1400}
  ]

}
