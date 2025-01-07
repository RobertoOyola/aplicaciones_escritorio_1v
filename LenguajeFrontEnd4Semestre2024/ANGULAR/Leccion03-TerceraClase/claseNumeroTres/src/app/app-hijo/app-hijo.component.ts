import { Component,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './app-hijo.component.html',
  styleUrl: './app-hijo.component.css'
})
export class AppHijoComponent {

  @Input() textoDesdeElHijo!:string;

  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensajePadre(){
    this.notificarPadre.emit('Hola soy un mensaje del componente hijo dirigido al component Padre');
  }


}
