import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BandejaPage } from '../pages/bandeja/bandeja';
import { BuscarMaquinaPage } from '../pages/maquina/buscar/buscarMaquina';

//services


//login
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;


  pages: Array<{title: string, icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage },
      { title: 'Perfil',icon:'person', component: ListPage },
      { title: 'Bandeja de ticket', icon:'mail-open', component : BandejaPage},
      { title: 'Cerrar sesion', icon:'power', component : BuscarMaquinaPage},
  ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page.component;
  }
}
