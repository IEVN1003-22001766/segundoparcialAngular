import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Distancia } from './formulario/distancia/distancia';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { ListaEscuela } from './escuela/lista-escuela/lista-escuela'
import { Cinepolis } from './cinepolis/cinepolis'

const routes: Routes = [
  {
    path: 'formulario',
    children: [
      // {
      //   path: 'distancia',
      //   loadComponent: () =>
      //     import('./formulario/distancia/distancia').then(
      //       (c) => c.Distancia
      //     )
      // },
      // {
      //   path: 'zodiaco',
      //   loadComponent: () =>
      //     import('./formulario/zodiaco/zodiaco').then(
      //       (c) => c.Zodiaco
      //     )
      // }
      { path: 'distancia', component: Distancia },
      { path: 'zodiaco', component: Zodiaco },
    ]
  },
  {
    path: 'escuela',
    children: [
      { path: 'lista-escuela', component: ListaEscuela }
    ]
  },
  { path: 'cinepolis', component: Cinepolis },

  { path: '', redirectTo: 'admin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
