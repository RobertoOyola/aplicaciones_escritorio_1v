import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'miSegundaAppAngular';
    mensaje: string='';

    name: string = 'Hola Angular';
    condicion : boolean = false;

    coleccion: string[]=[
      'Ir al cine',
      'Ir al mall del sol',
      'Ver el partido de Barcelona',
      'Comer en rukito'
    ]
textoPadre: string = 'Texto del component Padre';

    mostrarMensaje() {
      this.mensaje='Bienvenidos al mundo de Angular FrontEnd';
    }

    resetearMensaje(){
      this.mensaje='';
    }

    texto : string = '';

    actualizarTexto(event : Event){
      console.log(event.target);
      const elemento = event.target as HTMLInputElement;
      this.texto = elemento.value;
    }


    textoAHijo : string=''

    enviarMensajeDesdePadreHijo(){
      this.textoAHijo='Hola desde el hijo';
    }

}
