import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  // aqui se crea los direfentes slide de forma dinamica
  slides = [
    {

      title: "Titulo de Slide 1",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      image: "https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      description: "El rinoceronte recibe su nombre de una de sus características más destacables: sus cuernos. La palabra rinoceronte proviene del griego rhino que significa “nariz” y ceros que significa “cuerno”. El número de cuernos que tiene un rinoceronte varía según la especie. Las dos especies africanas (el rinoceronte negro y el rinoceronte blanco) y el rinoceronte de Sumatra tienen dos cuernos, mientras que el rinoceronte de Java y el rinoceronte de un solo cuerno tienen un cuerno."
    },
    {
      title: "Titulo de Slide 2",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      image: "assets/images/consola_music.jpg",
      description: "login"
    },
    {
      title: "Titulo de Slide 3",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      image: "assets/images/consola.jpg",
      description: "login"
    },
    {
      title: "Titulo de Slide 4",
      avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
      image: "assets/images/consola.jpg",
      description: "login"
    }
  ];

  toolbars = [
    {
      avatar: "assets/images/avatar.jpg",
    }
    
 
  ];

  constructor(private router:Router, private storage:Storage) { }
  

  ngOnInit() {
    console.log("hola intro")
    // this.storage.set("isIntroShowed", true);
  }


  exit(){
   //console.log("ingrese a la funcion");    
    this.router.navigateByUrl("/home");
  } 
}
