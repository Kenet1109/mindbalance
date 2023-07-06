import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profesores } from '../interface/profesores';
import { HttpClient } from '@angular/common/http';
import { ProfesoresServiceService } from '../services/profesores-service.service';

@Component({
  selector: 'app-gestionprofesores',
  templateUrl: './gestionprofesores.component.html',
  styleUrls: ['./gestionprofesores.component.css']
})
export class GestionprofesoresComponent {
  myForm!: FormGroup;
  filter = '';
  datosProfesores: Array<Profesores> = [];
  data: any;
  datos: any;

  constructor(private fb : FormBuilder,  private http: HttpClient, private servicioProfesores : ProfesoresServiceService){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required])
    })
  }

  guardar(form : FormGroup ){
    if(form.valid){
    this.servicioProfesores.updateProfesores(form.value).subscribe(data => {
      alert("Se Actualizo el Profesor con exito!")
      this.refresh();
    });
    }else{
      alert('Formulario Invalido')
    }
  }

  refresh (){
    let arrayProfesores : Array<Profesores> = [];
    this.servicioProfesores.getProfesores().subscribe(datos => {
      this.datosProfesores = datos.data;
    });
  }

  editar(datos: Profesores){
    this.myForm.setValue({
      identificacion: datos.identificacion,
      nombre: datos.nombre,
      contacto: datos.contacto,
      correo: datos.correo
    })
  }
  
}
