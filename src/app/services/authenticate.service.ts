import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  
// AQUI S ECREA EL SERVICIO DE VALIDACION DE LOGIN PARA EL ACCESO 
  onSubmitvali(credentials:any){
    
    return new Promise((accept, reject)=>{
      if (credentials.email=="dj@gmail.com" && credentials.password == "123456"){
        accept("Login correcto")
      }else{
        reject("Acceso incorrecto")
      }
      })
    }

  }

