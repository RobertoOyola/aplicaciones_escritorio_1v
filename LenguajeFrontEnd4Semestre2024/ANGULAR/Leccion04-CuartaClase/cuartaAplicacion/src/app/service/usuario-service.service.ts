import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private usuarioHttpApiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  obtenerUsuario():Observable<any>{
    return this.http.get(this.usuarioHttpApiUrl);
  }

  /*insertarUsuario():Observable<any>{
    return this.http.post(this.usuarioHttpApiUrl,objeto);
  }*/


}
