import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Ticket } from './ticket'

@Component({
  selector: 'app-cinepolis',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})

export class Cinepolis {
  formulario!: FormGroup

  nuevoTicket: Ticket = {
    nombre: '',
    nCompradores: '',
    tCineteco: '',
    nBoletos: ''
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      nCompradores: new FormControl(''),
      tCineteco: new FormControl(''),
      nBoletos: new FormControl('')
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

      this.nuevoTicket.nombre = 'Nombre del cliente: ' + this.formulario.value.nombre

      this.mensaje = ''
      this.txtDescuento = 'Descuento: ' + porcentaje + '%'
    } else {
      this.mensaje = 'No puede comprar mas de 7 boletos :('
      this.nuevoTicket.nombre = ''
      this.txtDescuento = ''
      this.total = 0;
    }
  }
}
