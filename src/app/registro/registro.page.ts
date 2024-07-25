import { Storage } from '@ionic/storage-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, IonModal } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;

  // @ViewChild(IonModal)
  // modal!: IonModal;

  validation_messages = {
    name: [
      { type: 'required', message: 'El Nombre es obligatorio.' },
      { type: 'pattern', message: 'Nombre invalido' },
    ],
    appelli: [
      { type: 'required', message: 'El Nombre es obligatorio.' },
      { type: 'pattern', message: 'Nombre invalido' },
    ],
    email: [
      { type: 'required', message: 'El Correo es obligatorio.' },
      { type: 'pattern', message: 'Correo invalido' },
    ],
    password: [
      { type: 'required', message: 'la Contraseña es obligatorio.' },
      { type: 'pattern', message: 'Contraseña invalido' },
    ],
    confirpassword: [
      {
        type: 'required',
        message: 'La confirmacion de la Contraseña es obligatorio.',
      },
      {
        type: 'minlength',
        message: 'La Contraseña debe tener minimo 6 caracteres.',
      },
    ],
  };

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authServices: AuthenticateService,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        '',
        Validators.compose([
          Validators.pattern(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)"
          ),
          Validators.required,
        ])
      ),
      appelli: new FormControl(
        '',
        Validators.compose([
          Validators.pattern(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)"
          ),
          Validators.required,
        ])
      ),
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
      confirpassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  ngOnInit() {}

  onregSubmit(datareg: any) {
    console.log('datos', datareg);
  }

  Cancel() {
    this.registerForm.reset();
    this.navCtrl.navigateForward('/login');
  }

  exit() {
    // console.log("ingrese a la funcion");
    // this.storage.set("isIntroShowed", true);
    this.navCtrl.navigateForward('/login');
    // this.router.navigateByUrl('/login');
  }
}
