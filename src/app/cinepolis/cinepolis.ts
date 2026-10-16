import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Ticket } from './ticket'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cinepolis',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})

export class Cinepolis {
  formulario!: FormGroup
  tickets: Ticket[] = []

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

    // sprit: buscar todas las propiedades del objeto y agregarlo en una sola linea
    this.tickets.push({ ...this.nuevoTicket })

    //LocalStorage: sistema de almacenamiento temporal del navegador que opera en el sistema del cliente
    localStorage.setItem(
      'tickets',
      JSON.stringify(this.tickets)
    )
  }

  cargarTicket(): void {
    const datos = localStorage.getItem('tickets');

    if (datos) {
      this.tickets = JSON.parse(datos)
    }
  }
}
