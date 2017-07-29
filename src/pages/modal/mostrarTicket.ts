import { Component } from "@angular/core";

import { NavController, ViewController } from "ionic-angular";

//bandeja de entrada
import { BandejaPage } from "../bandeja/bandeja";

@Component({
  selector : 'page-mostrar-ticket',
  template : `
  <ion-header>
     <ion-toolbar>
       <ion-title>
         TICKET CREADO
       </ion-title>
     </ion-toolbar>
  </ion-header>
      <ion-content>
      <ion-card>
    <ion-card-header text-center>
    <h1><ion-icon name="md-checkmark-circle" color="secondary"></ion-icon></h1>
      <h1>Ticket Creado!</h1>
    </ion-card-header>
    <ion-card-content text-center>
    <p>Genial creaste el ticket numero</p>
    <h1 color="light">#00102</h1>
    </ion-card-content>
</ion-card>
       </ion-content>
     <ion-footer>
  <ion-toolbar color="secondary" text-center>
    <ion-buttons>
    <button ion-button clear (click)="bandejaEntrada()">ir a bandeja de entrada</button>
    </ion-buttons>
  </ion-toolbar>
</ion-footer>
  `
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
