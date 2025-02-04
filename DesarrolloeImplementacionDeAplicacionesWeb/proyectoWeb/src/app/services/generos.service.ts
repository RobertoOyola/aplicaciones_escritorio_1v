import { inject, Inject, Injectable } from '@angular/core';
import { GeneroDTO } from '../generos/generos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private http= inject(HttpClient);
  constructor() { }

  /*public obtenerTodos():GeneroDTO[]{
    return [
      {id:1, nombre:'Accion'},
      {id:2, nombre:'Comedia'},
      {id:3, nombre:'Terror'},
    ]
  }*/

    public obtenerGeneros(): Observable<GeneroDTO[]>{
      return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos")
    }
}
