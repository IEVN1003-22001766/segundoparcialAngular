import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-lista-escuela',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela {
  formulario!:FormGroup

  nuevoAlumno:Alumno = {
    matricula:'test',
    nombre:'test',
    correo:'test',
    materia:'test',

  }

  ngOnInit():void{
    this.formulario = new FormGroup({
      matricula:new FormControl(''),
      nombre:new FormControl(''),
      correo:new FormControl(''),
      materia:new FormControl('')
    })
  }

  muestraAlumno():void{
    this.nuevoAlumno.matricula=this.formulario.value.matricula
    this.nuevoAlumno.nombre=this.formulario.value.nombre
    this.nuevoAlumno.correo=this.formulario.value.correo
    this.nuevoAlumno.materia=this.formulario.value.materia
  }
}