import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//paginas
import { LoginPage } from '../pages/login/login';
import { CrearTicketPage } from '../pages/ticket/crearTicket';
import { BuscarMaquinaPage } from '../pages/maquina/buscar/buscarMaquina';
import { MostrarMaquinaPage } from '../pages/maquina/mostrar/mostrarMaquina';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BandejaPage } from '../pages/bandeja/bandeja';
import { AgregarComentarioPage } from "../pages/ticket/agregar-comentario/agregarComentario";

//servicios / provider
import { GenerarTicketServicio } from "../providers/generarTicket";

//plugins nativos
import { Camera } from '@ionic-native/camera';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig }  from '../config/firebase.config';

//modalCtrl
import { ModalConfirmarTicketPage } from '../pages/modal/confirmarTicket';
import { MostrarTicket } from "../pages/modal/mostrarTicket";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BandejaPage,
    LoginPage,
    CrearTicketPage,
    BuscarMaquinaPage,
    MostrarMaquinaPage,
    ModalConfirmarTicketPage,
    MostrarTicket,
    AgregarComentarioPage,
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{backButtonText: '',iconMode: 'ios'}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BandejaPage,
    LoginPage,
    CrearTicketPage,
    BuscarMaquinaPage,
    MostrarMaquinaPage,
    ModalConfirmarTicketPage,
    MostrarTicket,
    AgregarComentarioPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GenerarTicketServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {}
