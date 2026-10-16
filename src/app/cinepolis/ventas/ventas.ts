import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Form } from '@angular/forms';
import { Ticket } from '../ticket';
import { CommonModule } from '@angular/common';
import { Cinepolis } from '../cinepolis'

@Component({
  selector: 'app-ventas',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas {
  formulario!: FormGroup
  tickets: Ticket[] = []
  indiceEdicion: number = -1
  verEditar: boolean = false

  nuevoTicket: Ticket = {
    nombre: '',
    nCompradores: '',
    tCineteco: '',
    nBoletos: '',
    descuento: 0,
    total: 0
  }

  ngOnInit(): void {
    this.cargarTicket()
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      nCompradores: new FormControl(''),
      tCineteco: new FormControl(''),
      nBoletos: new FormControl(''),
      descuento: new FormControl(0),
      total: new FormControl(0)
    })
  }

  descuento: number = 0
  total: number = 0
  mensaje: string = ''
  txtDescuento: string = ''

  procesar(): void {
    let numBoletos = parseInt(this.formulario.value.nBoletos)
    let tarjetaCine = this.formulario.value.tCineteco

    let porcentaje = 0
    let total = 0

    if (numBoletos <= 7) {
      if (numBoletos >= 5) {
        porcentaje += 15;
      } else if (numBoletos >= 3 && numBoletos <= 4) {
        porcentaje += 10;
      } else {
        porcentaje += 0;
      }

      if (tarjetaCine == 'si') {
        porcentaje += 10;
      }

      const precio = 12;
      const subtotal = numBoletos * precio;
      const montoDescuento = (subtotal * porcentaje) / 100;
      this.total = subtotal - montoDescuento;
      this.descuento = porcentaje;

      this.mensaje = ''
      this.txtDescuento = 'Descuento: ' + porcentaje + '%'

      this.nuevoTicket.nombre = this.formulario.value.nombre
      this.nuevoTicket.nCompradores = this.formulario.value.nCompradores
      this.nuevoTicket.tCineteco = this.formulario.value.tCineteco
      this.nuevoTicket.nBoletos = this.formulario.value.nBoletos
      this.nuevoTicket.descuento = this.descuento
      this.nuevoTicket.total = this.total
      this.agregarTicket()
    } else {
      this.mensaje = 'No puede comprar mas de 7 boletos :('
      this.nuevoTicket.nombre = ''
      this.txtDescuento = ''
      this.total = 0;
    }
  }

  cargarTicket(): void {
    const datos = localStorage.getItem('tickets');

    if (datos) {
      this.tickets = JSON.parse(datos)
    }
  }

  agregarTicket(): void {
    if (
      this.nuevoTicket.nombre === '' ||
      this.nuevoTicket.nBoletos === '' ||
      this.nuevoTicket.nCompradores === '' ||
      this.nuevoTicket.tCineteco === ''
    ) {
      alert('Todos los campos son obligatorios.')
      return;
    }

    if (this.indiceEdicion !== -1) {
      this.tickets[this.indiceEdicion] = {
        ...this.nuevoTicket
      }
    }
    else {
      // sprit: buscar todas las propiedades del objeto y agregarlo en una sola linea
      this.tickets.push({ ...this.nuevoTicket })
    }
    

    //LocalStorage: sistema de almacenamiento temporal del navegador que opera en el sistema del cliente
    localStorage.setItem(
      'tickets',
      JSON.stringify(this.tickets)
    )

    if (this.verEditar) {
      this.verEditar = false
    }
  }

  eliminarTicket(index: number): void {
    this.tickets.splice(index, 1)
    localStorage.setItem(
      'tickets',
      JSON.stringify(this.tickets)
    )
  }

  editarTicket(index: number): void {
    this.verEditar = true

    this.nuevoTicket = {
      ...this.tickets[index]
    }
    const alumno = this.tickets[index]
    this.formulario.patchValue({
      nombre: alumno.nombre,
      nCompradores: alumno.nCompradores,
      tCineteco: alumno.tCineteco,
      nBoletos: alumno.nBoletos
    })

    this.indiceEdicion = index

  }
}
