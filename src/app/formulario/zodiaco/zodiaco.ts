import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-zodiaco',
  standalone: false,
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre: string = ''
  apellido_p: string = ''
  apellido_m: string = ''
  dia: string = ''
  mes: string = ''
  anio: string = ''
  genero: string = ''

  mensaje: string = ''
  edad: string = ''
  signo: string = ''
  imagen: string = ''

  calcular(): void {
    let edadUser = 0
    let zodiaco = ''
    let logo = ''

    if (parseInt(this.mes) >= 10) {
      edadUser = 2025 - parseInt(this.anio);
    } else {
      edadUser = 2026 - parseInt(this.anio);
    }

    let numero = parseInt(this.anio) % 12;

    if (numero == 0) {
      logo = "https://cdn-icons-png.flaticon.com/512/1998/1998721.png"
      zodiaco = "Mono"
    } else if (numero == 1) {
      logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UGEAgIIUrIuyQqV6TpdZFW-1BY-M-aZezbX0AarNtA&s=10"
      zodiaco = "Gallo"
    } else if (numero == 2) {
      logo = "https://cdn-icons-png.flaticon.com/512/3636/3636172.png"
      zodiaco = "Perro"
    } else if (numero == 3) {
      logo = "https://cdn-icons-png.flaticon.com/512/3800/3800591.png"
      zodiaco = "Cerdo"
    } else if (numero == 4) {
      logo = "https://cdn-icons-png.flaticon.com/512/2297/2297338.png"
      zodiaco = "Rata"
    } else if (numero == 5) {
      logo = "https://cdn-icons-png.flaticon.com/512/616/616693.png"
      zodiaco = "Buey"
    } else if (numero == 6) {
      logo = "https://cdn-icons-png.flaticon.com/512/4717/4717914.png"
      zodiaco = "Tigre"
    } else if (numero == 7) {
      logo = "https://cdn-icons-png.flaticon.com/512/802/802338.png"
      zodiaco = "Conejo"
    } else if (numero == 8) {
      logo = "https://cdn-icons-png.flaticon.com/512/7723/7723475.png"
      zodiaco = "Dragon"
    } else if (numero == 9) {
      logo = "https://cdn-icons-png.flaticon.com/512/616/616653.png"
      zodiaco = "Serpiente"
    } else if (numero == 10) {
      logo = "https://cdn-icons-png.flaticon.com/512/9537/9537923.png"
      zodiaco = "Caballo"
    } else {
      logo = "https://cdn-icons-png.flaticon.com/512/1998/1998813.png"
      zodiaco = "Cabra"
    }

    this.mensaje = `Hola ${this.nombre} ${this.apellido_p} ${this.apellido_m}`;

    this.edad = `Tienes ${edadUser} años`

    this.signo = `Tu signo zodiacal es: ${zodiaco}`
    this.imagen = logo
  }
}