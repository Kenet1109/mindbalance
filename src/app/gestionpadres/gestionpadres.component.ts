import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Padres } from '../interface/padres';
import { PadresServiceService } from '../services/padres-service.service';


@Component({
  selector: 'app-gestionpadres',
  templateUrl: './gestionpadres.component.html',
  styleUrls: ['./gestionpadres.component.css']
})
export class GestionpadresComponent implements OnInit {
  myForm!: FormGroup;
  filter = '';
  datosPadres: Array<Padres> = [];
  data: any;
  datos: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private servicioPadres: PadresServiceService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      contacto: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      acudiente: new FormControl('', [Validators.required])
    });

    let arrayPadres: Array<Padres> = [];
    this.servicioPadres.getPadres().subscribe(datos => {
      this.datosPadres = datos.data;
    });
  }

  guardar(form: FormGroup) {
    if (form.valid) {
      this.servicioPadres.updatePadres(form.value).subscribe(data => {
        alert("Se Actualizo el Grado con exito!")
        this.refresh();
      });
    } else {
      alert('Formulario Invalido')
    }
  }

  refresh() {
    let arrayPadres: Array<Padres> = [];
    this.servicioPadres.getPadres().subscribe(datos => {
      this.datosPadres = datos.data;
    });
  }

  editar(datos: Padres){
    this.myForm.setValue({
      identificacion: datos.identificacion,
      nombre: datos.nombre,
      contacto: datos.contacto,
      correo: datos.correo,
      acudiente: datos.acudiente
    })
  }


}
