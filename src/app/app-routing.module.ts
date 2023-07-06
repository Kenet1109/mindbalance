import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { GradosComponent } from './grados/grados.component';
import { PsicologaComponent } from './psicologa/psicologa.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { PadresComponent } from './padres/padres.component';
import { GestionestudiantesComponent } from './gestionestudiantes/gestionestudiantes.component';
import { GestionpsicologaComponent } from './gestionpsicologa/gestionpsicologa.component';
import { GestionprofesoresComponent } from './gestionprofesores/gestionprofesores.component';
import { GestionpadresComponent } from './gestionpadres/gestionpadres.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'grados',
        component: GradosComponent
      },
      {
        path: 'usuarios/estudiantes',
        component: EstudiantesComponent
      },
      {
        path: 'usuarios/psicologas',
        component: PsicologaComponent
      },
      {
        path: 'usuarios/profesores',
        component: ProfesoresComponent
      },
      {
        path: 'usuarios/padresdefamilia',
        component: PadresComponent
      },
      {
        path: 'gestionarusuarios/estudiantes',
        component: GestionestudiantesComponent
      },
      {
        path: 'gestionarusuarios/psicologas',
        component: GestionpsicologaComponent
      },
      {
        path: 'gestionarusuarios/profesores',
        component: GestionprofesoresComponent
      },
      {
        path: 'gestionarusuarios/padresdefamilia',
        component: GestionpadresComponent
      }
    ]
  }
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
