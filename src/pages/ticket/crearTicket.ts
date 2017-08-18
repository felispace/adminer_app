import { Component } from '@angular/core';
import { ViewController, ToastController, Platform, ModalController,NavParams,NavController }  from "ionic-angular";
//formulario
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//plugins
import { Camera, CameraOptions  } from '@ionic-native/camera';
//firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//modal
import { MostrarTicket } from "../modal/mostrarTicket";
//interface
import {Maquina} from "../interface/maquina.interface";

//bandeja de ticket
import {BandejaPage} from "../bandeja/bandeja";

@Component({
    selector : 'page-crear-ticket',
    templateUrl : 'crearTicket.html'
})


export class CrearTicketPage {
  //variables globales
   data:Maquina;
   faenas: FirebaseListObservable<any[]>;
   private formTicket : FormGroup;
   imgPreview:string = '../assets/img/thumbnail-default.jpg';

   constructor(private formBuilder : FormBuilder,
               private camera: Camera,
               private modalCtrl : ModalController,
               private platform : Platform,
               private viewCtrl:ViewController,
               private toastCtrl:ToastController,
               private afDB: AngularFireDatabase,
               private navPCtrl:NavParams,
               private navCtrl:NavController
               ){
       this.data = this.navPCtrl.get('informacion');
       this.faenas =  this.afDB.list('/faena');
       this.formTicket = formBuilder.group({
       desFalla : ['',Validators.required],
       falla : ['',Validators.required],
       faena : ['',Validators.required],
       asistente : ['',Validators.required]
     });

   }

       abrir_camara(){
         const options: CameraOptions = {
           quality: 40,
           destinationType: this.camera.DestinationType.DATA_URL,
           encodingType: this.camera.EncodingType.JPEG,
           mediaType: this.camera.MediaType.PICTURE,
           correctOrientation : true
         }

         this.camera.getPicture(options).then((imageData) => {

           this.imgPreview = 'data:image/jpeg;base64,' + imageData;

         }, (err) => {
           this.mostrar_toast( "Error en la camara " +  err );
           console.error("Error en la camara" + err)
         });

       }

      private mostrar_toast( texto:string ){
        this.toastCtrl.create({
          message : texto,
          duration : 2500
        }).present();
      }

        mostrarTicket(){
          let ticket = this.formTicket.value
          let modal = this.modalCtrl.create(MostrarTicket,{
                      informacion:{
                        vehiculo:this.data.modelo,
                        patente:this.data.id,
                        faena:ticket.faena,
                        falla:ticket.falla
                      }
                    });
        modal.present();
       }

       bandejaEntrada(){
         this.navCtrl.popToRoot();
       }

}
