import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private storage:Storage) {}

  // AQUI SE CREA EL SERVICIO DE VALIDACION DE LOGIN PARA EL ACCESO
  onSubmitvali(credentials: any) {
    return new Promise((accept, reject) => {
      if (credentials.email == 'dj@gmail.com' && credentials.password == '123456')
      {
        accept('Login correcto');
      } else {
        reject('Acceso incorrecto');
      }
    });
  }
 // AQUI SE CREA EL SERVICIO DE VALIDACION DE REGISTRO DE USUARIO
  onRegvali(datareg: any) {
    datareg.password=btoa(datareg.password);
    return this.storage.set("User", datareg); 
  }

  
}
