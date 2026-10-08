import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { Navbar } from './navbar/navbar';
import { Distancia } from './formulario/distancia/distancia';
import { Cinepolis } from './cinepolis/cinepolis';

@NgModule({
  declarations: [App, Zodiaco, Navbar, Distancia, Cinepolis],
  imports: [BrowserModule, FormsModule, RouterOutlet, RouterLink, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
