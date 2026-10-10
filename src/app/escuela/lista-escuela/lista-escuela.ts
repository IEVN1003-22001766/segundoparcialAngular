import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-lista-escuela',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela {
  formulario!: FormGroup
  alumnos: Alumno[] = []

  nuevoAlumno: Alumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: '',
  }

  ngOnInit(): void {
    this.cargarAlumno()
    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    })
  }

  agregarAlumno(): void {
    if (
      this.nuevoAlumno.matricula === '' ||
      this.nuevoAlumno.nombre === '' ||
      this.nuevoAlumno.correo === '' ||
      this.nuevoAlumno.materia === ''
    ) {
      alert('Todos los campos son obligatorios.')
      return;
    }

    // sprit: buscar todas las propiedades del objeto y agregarlo en una sola linea
    this.alumnos.push({...this.nuevoAlumno })

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    )
  }

  muestraAlumno(): void {
    this.nuevoAlumno.matricula = this.formulario.value.matricula
    this.nuevoAlumno.nombre = this.formulario.value.nombre
    this.nuevoAlumno.correo = this.formulario.value.correo
    this.nuevoAlumno.materia = this.formulario.value.materia
  }

  cargarAlumno(): void {

  }
}