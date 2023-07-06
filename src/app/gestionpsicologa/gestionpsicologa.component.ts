import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Psicologas } from '../interface/psicologas';
import { HttpClient } from '@angular/common/http';
import { PsicologasServiceService } from '../services/psicologas-service.service';

@Component({
  selector: 'app-gestionpsicologa',
  templateUrl: './gestionpsicologa.component.html',
  styleUrls: ['./gestionpsicologa.component.css']
})
export class GestionpsicologaComponent {
  myForm!: FormGroup;
  filter = '';
  datosPsicologas: Array<Psicologas> = [];
  data: any;
  datos: any;

  constructor(private fb : FormBuilder,  private http: HttpClient, private servicioPsicologas: PsicologasServiceService){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required])
    });

    let arrayPadres: Array<Psicologas> = [];
    this.servicioPsicologas.getPsicologas().subscribe(datos => {
      this.datosPsicologas = datos.data;
    });
  }

  guardar(form : FormGroup ){
    if(form.valid){
      this.servicioPsicologas.updatePsicologas(form.value).subscribe(data => {
        alert("Se registro la Psicologa con exito!")
        this.refresh();
      });
    }else{
      alert('Formulario Invalido')
    }
  }

  refresh (){
    let arrayPadres: Array<Psicologas> = [];
    this.servicioPsicologas.getPsicologas().subscribe(datos => {
      this.datosPsicologas = datos.data;
    });
  }

  editar(datos: Psicologas){
    this.myForm.setValue({
      identificacion: datos.identificacion,
      nombre: datos.nombre,
      contacto: datos.contacto,
      correo: datos.correo
    })
  }

}
