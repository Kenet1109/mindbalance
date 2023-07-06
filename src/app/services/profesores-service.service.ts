import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesores } from '../interface/profesores';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresServiceService {
  
  servidor = 'http://localhost:8080/api';

  constructor( private servicio : HttpClient) { }

  getProfesores(): Observable<any> {
    return this.servicio.get(`${this.servidor}/profesores`);
  }

  createProfesores(profesores : Profesores) {
    return this.servicio.post<Profesores>(`${this.servidor}/profesores`, profesores);
  }

  updateProfesores(profesores : Profesores) {
    return this.servicio.put<Profesores>(`${this.servidor}/estudiantes/${profesores.identificacion}` , profesores)
  }

  deleteProfesores(profesores : Profesores){
    return this.servicio.delete<Profesores>(`${this.servidor}/profesores/${profesores.identificacion}`);
  }

}
