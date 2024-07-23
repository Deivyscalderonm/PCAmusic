import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router, private storage:Storage) { }



  exit(){
    //console.log("ingrese a la funcion");
     this.storage.set("isIntroShowed", true);
     this.router.navigateByUrl("/login");
   } 
  
}
