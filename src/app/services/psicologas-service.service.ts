import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologas } from '../interface/psicologas';

@Injectable({
  providedIn: 'root'
})
export class PsicologasServiceService {

  servidor = 'http://localhost:8080/api';

  constructor( private servicio : HttpClient) { }

  getPsicologas(): Observable<any> {
    return this.servicio.get(`${this.servidor}/psicologas`);
  }

  createPsicologas(psicologas : Psicologas) {
    return this.servicio.post<Psicologas>(`${this.servidor}/psicologas`, psicologas);
  }

  updatePsicologas(psicologas : Psicologas) {
    return this.servicio.put<Psicologas>(`${this.servidor}/psicologas/${psicologas.identificacion}` , psicologas)
  }

  deletePsicologas(psicologas : Psicologas){
    return this.servicio.delete<Psicologas>(`${this.servidor}/psicologas/${psicologas.identificacion}`);
  }
}
