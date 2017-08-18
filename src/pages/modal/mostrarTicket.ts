import { Component } from "@angular/core";

import { NavController, ViewController } from "ionic-angular";

//bandeja de entrada
import { BandejaPage } from "../bandeja/bandeja";

@Component({
  selector : 'page-mostrar-ticket',
  template : `
  <ion-content>
    <ion-card class="card-background-page">
    <ion-card-content class="card-content" text-center>
    <h1><ion-icon name="md-checkmark-circle" color="secondary"></ion-icon></h1>
    <h1>Ticket Creado!</h1>
      <p>Genial, creaste el ticket numero</p>
      <h1 color="light">#00102</h1>
      </ion-card-content>
        <button class="boton_aceptar" ion-button (click)="bandejaEntrada()">Aceptar</button>
      </ion-card>
  </ion-content>`
})


export class MostrarTicket{

  constructor(
              private navCrtl:NavController,
              private viewCtrl:ViewController){

  }


  bandejaEntrada(){
    this.viewCtrl.dismiss();

  }
}
