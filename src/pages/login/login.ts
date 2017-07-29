import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, MenuController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BandejaPage} from "../bandeja/bandeja";
import {HomePage} from "../home/home";

@Component({
    selector : 'page-login',
    templateUrl : 'login.html'
})

export class LoginPage{


    loginForm:FormGroup;

constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public menu:MenuController,
              private fb:FormBuilder) {
              this.menu.enable(false);
              this.loginForm = this.fb.group({
                nombre : ['',[Validators.required]],
                password : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
              });
}


onClick(){
  this.navCtrl.push(HomePage);
}

 validarUsuario(){
   console.log(this.loginForm.value);
 }
 
}
