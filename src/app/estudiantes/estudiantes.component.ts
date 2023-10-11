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
      genero : new FormControl('',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required]),
      acudiente : new FormControl('',[Validators.required]),
      grado : new FormControl('',[Validators.required]),
      curso : new FormControl('',[Validators.required])
    });

    let arrayEstudiantes: Array<Estudiantes> = [];
    this.servicioEstudiantes.getEstudiantes().subscribe((data) => {
      this.datosEstudiantes = data;
    });

    this.datosEstudiantes.push(
      {
      identificacion: '1098223', 
      nombre: 'Kenet Barrera', 
      edad: 24, 
      genero: 'M', 
      contacto: '3219867742', 
      correo: 'kenet@hotmail.com', 
      acudiente: '5098773', 
      grado: 11, 
      curso: 2},
      {
      identificacion: '223134',
      nombre: 'Andrea Loli',
      edad: 22,
      genero: 'F',
      contacto: '3249875445',
      correo: 'andrea@gmail.com',
      acudiente: '3552254',
      grado: 11,
      curso: 1
      })
  }

  guardar(form : FormGroup ){
    if(form.valid){
      this.servicioEstudiantes.createEstudiantes(form.value).subscribe((data) => {
        alert("Se registro el Estudiante con exito!")
        this.refresh();
        this.myForm.reset({genero:'', grado:'', curso:''});
      });
    }else{
      alert('Formulario Invalido')
    }
  }

  refresh (){
    let arrayEstudiantes: Array<Estudiantes> = [];
    this.servicioEstudiantes.getEstudiantes().subscribe((data) => {
      this.datosEstudiantes = data;
    });
  }

  cancelar(){
    this.myForm.reset({genero:'',grado:'', curso:''});
  }

}
