import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BandejaPage} from "../bandeja/bandeja";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.navCtrl.push(BandejaPage);
  }
}
