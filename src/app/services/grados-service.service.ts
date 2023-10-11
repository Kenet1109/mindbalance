import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grados } from '../interface/grados';


@Injectable({
  providedIn: 'root'
})

export class GradosServiceService {

  servidor = 'http://localhost:8080/api';

  constructor( private servicio: HttpClient) { }

  getGrados() : Observable<any> {
    return this.servicio.get(`${this.servidor}/grados`);
  }

  createGrados(grados: Grados) {
    return this.servicio.post<Grados>(`${this.servidor}/grados`, grados);
  }

  updateGrados(grados: Grados) {
    return this.servicio.put<Grados>(`${this.servidor}/grados/${grados.id}` , grados)
  }

  deleteGrados(grados: Grados){
    return this.servicio.delete<Grados>(`${this.servidor}/grados/${grados.id}`);
  }
}
