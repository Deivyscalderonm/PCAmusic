import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {
  }


  exit(){
    // console.log("ingrese a la funcion");
     this.storage.remove("isUserLoggedIn");
     
     this.router.navigateByUrl("/login");
   } 
}
