import { inject, Injectable } from '@angular/core';
import { ActorDTO } from './actores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

   private http = inject(HttpClient);
    constructor() { }
  
    public obtenerActores(): Observable<ActorDTO[]>{
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/actores");
    }

}
