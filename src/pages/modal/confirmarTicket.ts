import {Component} from "@angular/core";
import { NavParams,ViewController,LoadingController, AlertController,ModalController } from "ionic-angular";

import { MostrarTicket } from "../modal/mostrarTicket";

//interface
import {Ticket} from "../interface/ticket.interface";
//firebase
//import { AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector :'page-confirmar-ticket',
  template : `
   <ion-header>
      <ion-toolbar>
        <ion-title>
          CONFIRMAR
        </ion-title>
      </ion-toolbar>
   </ion-header>
   <ion-content>
      <ion-list no-lines>
        <ion-item>
          {{ticket.vehiculo}}<ion-icon item-end name="md-checkmark-circle"></ion-icon>
        </ion-item>
          <ion-item>
            {{ticket.patente}}<ion-icon item-end name="md-checkmark-circle"></ion-icon>
          </ion-item>
          <ion-item>
            {{ticket.faena}}<ion-icon item-end name="md-checkmark-circle"></ion-icon>
          </ion-item>
          <ion-item>
            {{ticket.falla}}<ion-icon item-end name="md-checkmark-circle"></ion-icon>
          </ion-item>
        <ion-row text-center padding-top>
          <ion-col>
            <button width-50 ion-button (click)="cancelarTicket()" color="danger">Cerrar</button>
          </ion-col>
          <ion-col>
            <button width-50 ion-button (click)="crearTicket()">Aceptar</button>
          </ion-col>
        </ion-row>
      </ion-list>
      </ion-content>
  `
})

export class ModalConfirmarTicketPage {

 ticket:Ticket;


  constructor(
              private navPCtrl:NavParams,
              private viewCtrl:ViewController,
              private loadCtrl:LoadingController,
              private alertCtrl:AlertController,
              private modalCtrl:ModalController){
    this.ticket = this.navPCtrl.get('informacion');
    }

    cancelarTicket(){
      this.viewCtrl.dismiss();
    }


    crearTicket(){
        this.viewCtrl.dismiss();
        let loading = this.loadCtrl.create({
          content:'Procesando Ticket...'
        });

        loading.present();
        setTimeout(()=>{
          loading.dismiss();
          let modalMostrarTicket = this.modalCtrl.create(MostrarTicket)
          modalMostrarTicket.present();
        },2000);
    }


}
