import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mi-primer-proyectoangular';

  tareas : string []=[
    "HJola",
    "Hola"
  ]
  /*nombre = 'Yoslen';
  apellido = 'Carvajal'
  edad = 89;*/
mensaje: string = '';

texto: string ='';

mostrarMensaje(){
this.mensaje='Hola Bienevenido a la unidad de Angular'
}

resetearMensaje(){
this.mensaje=''
}


mostrarMensajes(event: Event){
  const elemento = event.target as HTMLInputElement;
  this.texto = elemento.value;

  console.log(this.tareas);
}








}
