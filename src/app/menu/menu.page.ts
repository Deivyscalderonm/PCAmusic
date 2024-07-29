import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LoginPage } from '../login/login.page';
import { LoginPageModule } from './../login/login.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navCtrl: NavController,private menu:MenuController,private router:Router, private storage:Storage) { }

  ngOnInit() {
  }

  closemenu(){
    console.log("cerrar menu");
    this.menu.close();
    
  }
  
  exit(){
    // console.log("ingrese a la funcion");
     this.storage.remove("isUserLoggedIn");     
    //  this.router.navigateByUrl("/login");    
     this.navCtrl.navigateRoot("/login");
   } 

}
