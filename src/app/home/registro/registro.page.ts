import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {
  }

  exit(){
   // console.log("ingrese a la funcion");
    // this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  } 

}
