import { Component, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router) { }

  login(){
   
    this.router.navigateByUrl("/intro");
  }

  registre(){
    console.log("ingrese a la funcion");
    this.router.navigateByUrl("/registro");
  }

  
}
