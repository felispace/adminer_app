import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { MostrarMaquinaPage } from '../mostrar/mostrarMaquina';

@Component({
    selector: 'page-buscar',
    templateUrl: 'buscarMaquina.html'
})

export class BuscarMaquinaPage{

    searchQuery: string = '';
    patentes:Array<any>;
    constructor(private nav:NavController){
    this.initializePatente();
   }

   initializePatente(){
       this.patentes = [
         {"id":"123456"},
         {"id":"456789"},
         {"id":"098654"},
         {"id":"1257890"},
         {"id":"lkjuio"},
         {"id":"hhyyuii"}
      ]
   }

   getItems(ev:any){
       this.initializePatente();

       let val = ev.target.value;
       if(val && val.trim() != ''){
           this.patentes = this.patentes.filter((item)=>{
               return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
           })
       }
   }

   getPatente(event, patente):void{

       this.nav.push(MostrarMaquinaPage,{data :
            {
                id:patente,
                tipo:'vehiculo',
                modelo:'gtx',
                seguro:'si',
                permiso:'si',
                fechaRevTec:'2017-08-12',
                lugarInspeccion:'si'}
            });
   }


}
