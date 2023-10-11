import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Grados } from '../interface/grados';
import { HttpClient } from '@angular/common/http';
import { GradosServiceService } from '../services/grados-service.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { __values } from 'tslib';

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
  gradoDelete: any;
  datosDelete: Array<Grados> = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private servicioGrados: GradosServiceService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: new FormControl(''),
      grado: new FormControl('',[Validators.required]),
      curso: new FormControl('',[Validators.required]),
      profesor: new FormControl('', [Validators.required]),
    });

    let arrayGrados: Array<Grados> = [];
    
    this.servicioGrados.getGrados().subscribe(data => {
      this.datosGrados = data;
    });

    this.datosGrados.push({id:1, curso:2, grado:11, profesor:'5073637'},
                          {id:2, curso:1, grado:11, profesor:'877652'},
                          {id:3, curso:3, grado:11, profesor:'26536768'})
  }

  guardar(form: FormGroup) {
    if (form.valid) {
      if (form.value.id && form.value.id !== 0) {
        this.servicioGrados.updateGrados(form.value).subscribe(data => {
          alert("Se Actualizo el Grado con exito!")
          this.refresh();
          this.myForm.reset({grado:'', curso:''});
        });
      } else {
        this.servicioGrados.createGrados(form.value).subscribe(data => {
          alert("Se registro el Grado con exito!")
          this.refresh();
          this.myForm.reset({grado:'', curso:''});
        });
      }
    } else {
      alert('Formulario Invalido')
    }
  }

  refresh() {
    let arrayGrados: Array<Grados> = [];
    this.servicioGrados.getGrados().subscribe((data) => {
      this.datosGrados = data;
    });
  }

  editar(datos : Grados) {
    this.myForm.setValue({id:datos.id, grado:datos.grado, curso:datos.curso, profesor:datos.profesor});
  }

  eliminar(form : Grados){
      this.servicioGrados.deleteGrados(form).subscribe((data) =>{
        alert("El grado ha sido eliminado!");
        this.refresh();
      });
      this.datosDelete.shift();

  }

  cancelar(){
    this.myForm.reset({grado:'', curso:''});
  }

  gradocancelar(){
    this.datosDelete.shift();
  }

  gradoEliminar(datos : Grados){
    this.datosDelete.push(datos);
    console.log(this.datosDelete);
  }
}
