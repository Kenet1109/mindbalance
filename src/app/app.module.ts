import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GradosComponent } from './grados/grados.component';
import { PsicologaComponent } from './psicologa/psicologa.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { PadresComponent } from './padres/padres.component';
import { GestionpadresComponent } from './gestionpadres/gestionpadres.component';
import { GestionestudiantesComponent } from './gestionestudiantes/gestionestudiantes.component';
import { GestionpsicologaComponent } from './gestionpsicologa/gestionpsicologa.component';
import { GestionprofesoresComponent } from './gestionprofesores/gestionprofesores.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    EstudiantesComponent,
    GradosComponent,
    PsicologaComponent,
    ProfesoresComponent,
    PadresComponent,
    GestionpadresComponent,
    GestionestudiantesComponent,
    GestionpsicologaComponent,
    GestionprofesoresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
