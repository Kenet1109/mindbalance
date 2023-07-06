import { Component, OnInit } from '@angular/core';
import { Profesores } from '../interface/profesores';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfesoresServiceService } from '../services/profesores-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{

  myForm!: FormGroup;
  filter = '';
  datosProfesores: Array<Profesores> = [];
  data: any;
  datos: any;

  constructor(private fb : FormBuilder, private http: HttpClient, private servicioProfesores : ProfesoresServiceService){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required])
    });

    let arrayProfesores : Array<Profesores> = [];
    this.servicioProfesores.getProfesores().subscribe(datos => {
      this.datosProfesores = datos.data;
    });
  }

  guardar(form : FormGroup ){
    console.log('Es valido' + form.valid)
    if(form.valid){
      this.servicioProfesores.createProfesores(form.value).subscribe(data => {
        alert("Se registro el Profesor con exito!")
        this.refresh();
        this.myForm.reset();
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



}
