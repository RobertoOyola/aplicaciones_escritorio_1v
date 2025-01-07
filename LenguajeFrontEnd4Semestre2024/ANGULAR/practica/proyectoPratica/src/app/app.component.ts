import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajeService } from './service/mensaje.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoPratica';

  usuarios : any[]=[];

  constructor(private mensajeService: MensajeService){
  }

  ngOnInit(): void {
    this.mensajeService.obtenerDatos().subscribe((data) => {
    this.usuarios = data;
    });
    }


}
