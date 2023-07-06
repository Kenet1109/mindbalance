import { Component, OnInit } from '@angular/core';
import { Estudiantes } from '../interface/estudiantes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EstudiantesServiceService } from '../services/estudiantes-service.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{
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
      this.servicioEstudiantes.createEstudiantes(form.value).subscribe(data => {
        alert("Se Actualizo el Estudiante con exito!")
        this.refresh();
        this.myForm.reset();
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

}
