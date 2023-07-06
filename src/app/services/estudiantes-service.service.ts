import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiantes } from '../interface/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesServiceService {

  servidor = 'http://localhost:8080/api';

  constructor( private servicio : HttpClient) { }

  getEstudiantes(): Observable<any> {
    return this.servicio.get(`${this.servidor}/observaciones`);
  }

  createEstudiantes(estudiantes: Estudiantes) {
    return this.servicio.post<Estudiantes>(`${this.servidor}/estudiantes`, estudiantes);
  }

  updateEstudiantes(estudiantes: Estudiantes) {
    return this.servicio.put<Estudiantes>(`${this.servidor}/estudiantes/${estudiantes.identificacion}` , estudiantes)
  }

  deleteEstudiantes(estudiantes: Estudiantes){
    return this.servicio.delete<Estudiantes>(`${this.servidor}/estudiantes/${estudiantes.identificacion}`);
  }

}
