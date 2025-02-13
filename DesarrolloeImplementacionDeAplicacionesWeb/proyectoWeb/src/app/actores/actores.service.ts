import { inject, Injectable } from '@angular/core';
import { ActorDTO } from './actores';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';
import { construirQueryParams } from '../compartidos/componentes/funciones/construirQueryParams';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

   private http = inject(HttpClient);
   private urlBase="http://apicodersnet.runasp.net/api/actores";
    constructor() { }
  
    public obtenerActores(): Observable<ActorDTO[]>{
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/actores");
    }

    public obtenerActoresPaginacion(paginacion: paginacionDTO): 
                                      Observable<HttpResponse<ActorDTO[]>>{
        let queryparams = construirQueryParams(paginacion);
        return this.http.get<ActorDTO[]>(`${this.urlBase}`
          ,{params:queryparams, observe:'response'}
        );
    }

    public eliminarActor(actorid: number){
      return this.http.delete(`${this.urlBase}/${actorid}`);
    }

}
