import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CineDTO } from './cines';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

    private http = inject(HttpClient);
   constructor() { }
 
   public obtenerCines(): Observable<CineDTO[]>{
     return this.http.get<CineDTO[]>("http://apicodersnet.runasp.net/api/cines");
   }
 
}
