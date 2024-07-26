import { Storage } from '@ionic/storage-angular';
import { Component,  OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

import { AuthenticateService } from '../services/authenticate.service';
import { AlertController} from '@ionic/angular';
import {NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  //funcion para mensajes
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'Correo invalido' },
    ],
    password: [
      { type: 'required', message: 'La Contraseña es obligatorio.' },
      {type: 'minlength',message: 'La Contraseña debe tener minimo 6 caracteres.'},
    ],
  };
  //declaracion de variable
  errorMessage: any; //variable para captura de mensaje

  // construcor
  //AQUI EN EL CONSTRUCTOR DECLARAMOS EL NAV PARA LA NAVEGACION ENTRE PAGINAS
  //DECLARAMOS EL FORMBUILDER PARA CREACION DE FORMULARIOS O INTERACTUAR CON LOS MISMOS
  //DECLARAMOS EL AUTHENTICATEsERVICE QUE ES EL SERVICIO CREADO EN LA CARPETA SERVICIO PARA VERIFICAR EL ACCESO
  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authServices: AuthenticateService,
    private alertController: AlertController,
    private storage: Storage,
    
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.pattern(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          ),
          Validators.required,
        ])
      ),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
    
  }

  onSubmit(dataLogin: any) {
    console.log("datos", dataLogin);
    this.authServices.onSubmitvali(dataLogin).then((res) => {
        this.errorMessage = "";
        this.storage.set("isUserLoggedIn", true);        
        this.navCtrl.navigateForward('/home');
       
      }).catch(err => {
        this.errorMessage = err;
        this.presentAlert(this.errorMessage);
      });
  }

  registre() {
    // console.log("ingrese a la funcion");
   this.navCtrl.navigateForward('/registro');
   this.loginForm.reset();
    // this.route.navigateByUrl("/registro");
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mss,
      buttons: ['Ok', 'Cancelar'],
    });

    await alert.present();
  }
}
