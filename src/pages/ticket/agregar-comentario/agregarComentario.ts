import { Component } from "@angular/core";
import { NavController, NavParams,MenuController } from 'ionic-angular';
import { BandejaPage } from "../bandeja/bandeja";
@Component({
      selector: 'page-agregarComentario',
      templateUrl : 'agregarComentario.html'
})

export class AgregarComentarioPage{
  constructor(
              private navPCtrl:NavParams,
              private navCtrl:NavController
              ){

}
              bandejaEntrada(){
                this.navCtrl.popToRoot();
              }
}
