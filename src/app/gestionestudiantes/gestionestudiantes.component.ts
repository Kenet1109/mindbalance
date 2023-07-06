import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudiantes } from '../interface/estudiantes';
import { HttpClient } from '@angular/common/http';
import { EstudiantesServiceService } from '../services/estudiantes-service.service';

@Component({
  selector: 'app-gestionestudiantes',
  templateUrl: './gestionestudiantes.component.html',
  styleUrls: ['./gestionestudiantes.component.css']
})
export class GestionestudiantesComponent implements OnInit{
  myForm!: FormGroup;
  filter = '';
  datosEstudiantes: Array<Estudiantes> = [];
  data: any;
  datos: any;

  constructor(private fb : FormBuilder, private http: HttpClient, private servicioEstudiantes: EstudiantesServiceService){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      edad : new FormControl('',[Validators.required]),
      genero : new FormControl('GENERO',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required]),
      acudiente : new FormControl('',[Validators.required]),
      grado : new FormControl('GRADO',[Validators.required]),
      curso : new FormControl('CURSO',[Validators.required])
    });

    let arrayEstudiantes: Array<Estudiantes> = [];
    this.servicioEstudiantes.getEstudiantes().subscribe(datos => {
      this.datosEstudiantes = datos.data;
    });
  }

  guardar(form : FormGroup ){
    if(form.valid){
      this.servicioEstudiantes.updateEstudiantes(form.value).subscribe(data => {
        alert("Se Actualizo el Estudiante con exito!")
        this.refresh();
      });
    }else{
      alert('Formulario Invalido')
    }
  }

  refresh (){
    let arrayEstudiantes: Array<Estudiantes> = [];
    this.servicioEstudiantes.getEstudiantes().subscribe(datos => {
      this.datosEstudiantes = datos.data;
    });
  }

  editar(datos: Estudiantes){
    this.myForm.setValue({
      identificacion: datos.identificacion,
      nombre: datos.nombre,
      edad: datos.edad,
      genero: datos.genero,
      contacto: datos.contacto,
      correo: datos.correo,
      acudiente: datos.acudiente,
      grado: datos.grado,
      curso: datos.curso,
    })
  }

}
