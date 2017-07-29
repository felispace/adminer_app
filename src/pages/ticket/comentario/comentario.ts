import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-comentario',
  templateUrl: 'comentario.html',
})
export class ComentarioPage {

  profile:string = "../assets/img/profile.jpg";

  datosFalla = {
    imgFalla : 'http://flatheaddrag.com/Images/images8rt/8rtb07.jpg',
    titulo : 'Falla de Bomba',
    mecanico : 'Juan Perez - Mecanico',
    fecha : '10:30 AM 12/05/2017'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
