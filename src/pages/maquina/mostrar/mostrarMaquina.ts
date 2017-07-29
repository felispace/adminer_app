import { Component } from '@angular/core';
import {NavController, NavParams,MenuController} from 'ionic-angular';
import {CrearTicketPage} from '../../ticket/crearTicket';
import { Maquina } from '../../interface/maquina.interface';


@Component({
    selector : 'page-mostrar-maquina',
    templateUrl : 'mostrarMaquina.html'
})


export class MostrarMaquinaPage {

data:Maquina[]=[];

     constructor(
             private nav:NavController,
             public navParams:NavParams, private menu:MenuController)
              {
          this.menu.enable(true);
          this.data = this.navParams.get('data');

   }


crearTicket(){
    this.nav.push(CrearTicketPage,{informacion:this.data});
}


}
