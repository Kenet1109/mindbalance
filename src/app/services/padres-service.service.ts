import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Padres } from '../interface/padres';

@Injectable({
  providedIn: 'root'
})
export class PadresServiceService {
  
  servidor = 'http://localhost:8080/api';

  constructor( private servicio : HttpClient) { }

  getPadres(): Observable<any> {
    return this.servicio.get(`${this.servidor}/padres`);
  }

  createPadres(padres: Padres) {
    return this.servicio.post<Padres>(`${this.servidor}/padres`, padres);
  }

  updatePadres(padres: Padres) {
    return this.servicio.put<Padres>(`${this.servidor}/padres/${padres.identificacion}` , padres)
  }

  deletePadres(padres: Padres){
    return this.servicio.delete<Padres>(`${this.servidor}/padres/${padres.identificacion}`);
  }

}
