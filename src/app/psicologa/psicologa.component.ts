import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Psicologas } from '../interface/psicologas';
import { HttpClient } from '@angular/common/http';
import { PsicologasServiceService } from '../services/psicologas-service.service';

@Component({
  selector: 'app-psicologa',
  templateUrl: './psicologa.component.html',
  styleUrls: ['./psicologa.component.css']
})

export class PsicologaComponent implements OnInit {
  myForm!: FormGroup;
  filter = '';
  datosPsicologas: Array<Psicologas> = [];
  data: any;
  datos: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private servicioPsicologas: PsicologasServiceService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      contacto: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required])
    });

    let arrayPsicologas: Array<Psicologas> = [];
    this.servicioPsicologas.getPsicologas().subscribe(datos => {
      this.datosPsicologas = datos.data;
    });
  }

  guardar(form: FormGroup) {
    if (form.valid) {
      this.servicioPsicologas.createPsicologas(form.value).subscribe(data => {
        alert("Se registro la Psicologa con exito!")
        this.refresh();
        this.myForm.reset();
      });
    } else {
      alert('Formulario Invalido')
    }
  }

  refresh() {
    let arrayPsicologas: Array<Psicologas> = [];
    this.servicioPsicologas.getPsicologas().subscribe(datos => {
      this.datosPsicologas = datos.data;
    });
  }



}
