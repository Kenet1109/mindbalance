import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Grados } from '../interface/grados';
import { HttpClient } from '@angular/common/http';
import { GradosServiceService } from '../services/grados-service.service';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
  myForm!: FormGroup;
  filterPost = '';
  datosGrados: Array<Grados> = [];
  data: any;
  datos: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private servicioGrados: GradosServiceService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: new FormControl(null),
      grado: new FormControl('GRADO', [Validators.required]),
      curso: new FormControl('CURSO', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
    });

    let arrayGrados: Array<Grados> = [];
    this.servicioGrados.getGrados().subscribe(datos => {
      this.datosGrados = datos.data;
    });

  }

  guardar(form: FormGroup) {
    if (form.valid) {
      if (form.value.id && form.value.id !== 0) {
        this.servicioGrados.updateGrados(form.value).subscribe(data => {
          alert("Se Actualizo el Grado con exito!")
          this.refresh(form);
          this.myForm.reset();
        });
      } else {
        this.servicioGrados.createGrados(form.value).subscribe(data => {
          alert("Se registro el Grado con exito!")
          this.refresh(form);
          this.myForm.reset();
        });
      }
    } else {
      alert('Formulario Invalido')
    }
  }

  refresh(form: FormGroup) {
    let arrayGrados: Array<Grados> = [];
    this.servicioGrados.getGrados().subscribe(datos => {
      this.datosGrados = datos.data;
    });
  }

  editar(datos: Grados) {
    this.myForm.setValue({
      id: datos.id,
      grados: datos.grado,
      curso: datos.curso,
      profesor: datos.profesor
    })
  }

}
