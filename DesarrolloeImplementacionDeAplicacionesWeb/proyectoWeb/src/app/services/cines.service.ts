import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDTO } from '../actores/actores';
import { CoordenadasDTO } from '../cines/cines';

@Injectable({
  providedIn: 'root'
})
export class CinesService {
  private http= inject(HttpClient);
  constructor() { }

  public obtenerCines(): Observable<CoordenadasDTO[]>{
        return this.http.get<CoordenadasDTO[]>("http://apicodersnet.runasp.net/api/cines")
      }
}
