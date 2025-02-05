import { inject, Inject, Injectable } from '@angular/core';
import { GeneroDTO } from '../generos/generos';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { paginacionDTO } from '../compartidos/componentes/modelos/paginacionDTO';
import { contruirQueryParams } from '../compartidos/componentes/funciones/contruirQueryParams';

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

    public obtenerGenerosPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<GeneroDTO[]>>{
      let queryparams = contruirQueryParams(paginacion);
      return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos"
        ,{params:queryparams, observe:'response'}
      )
    }
}
