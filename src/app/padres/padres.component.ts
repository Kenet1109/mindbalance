import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Padres } from '../interface/padres';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PadresServiceService } from '../services/padres-service.service';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent implements OnInit{

  myForm!: FormGroup;
  filter = '';
  datosPadres: Array<Padres> = [];
  data: any;
  datos: any;

  constructor(private fb : FormBuilder, private http: HttpClient, private servicioPadres: PadresServiceService){
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      identificacion : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      contacto : new FormControl('',[Validators.required]),
      correo : new FormControl('',[Validators.required]),
      acudiente : new FormControl('',[Validators.required])
    })

    let arrayPadres : Array<Padres> = [];
    this.servicioPadres.getPadres().subscribe((data) => {
      this.datosPadres = data;
    });
  }

  guardar(form : FormGroup ){
    if(form.valid){
      this.servicioPadres.createPadres(form.value).subscribe((data) => {
        alert("Se registro el Padre con exito!")
        this.refresh();
        this.myForm.reset();
      });
    }else{
      alert('Formulario Invalido')
    }
  }

  refresh (){
    let arrayPadres : Array<Padres> = [];
    this.servicioPadres.getPadres().subscribe((data) => {
      this.datosPadres = data;
    });
  }

  cancelar(){
    this.myForm.reset();
  }

}
