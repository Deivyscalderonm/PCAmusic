import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  artistsJson: any;
  artists: any;
  

  constructor(
    private router: Router,
    private navCtrl: NavController, 
    private storage: Storage, 
    private musicService: MusicService, 
    private modalController: ModalController) { }


  ngOnInit() {
    this.artistsJson = this.musicService.getArtistsJson().artists;
    //this.artists = this.musicService.getArtistsJson().artists;
     console.log("Json", this.artistsJson)
    /* this.musicService.getArtists().subscribe((data:any) =>{
      this.artists = data
      console.log(this.artists)
    }) */
    this.musicService.getArtists().then(data => {
      this.artists = data;
      console.log(data)
    })

  }

  async showSongs(artstis: any) {
    console.log(artstis)
    const songs = await this.musicService.getArtistTracks(artstis.id);
    const modal = await this.modalController.create(
      {
        component: SongModalPage,
        componentProps: {
          name: artstis.name,
          id: artstis.id,
          songs: songs
        }
      }
    );
    modal.present();
  }


  exit() {
    // console.log("ingrese a la funcion");
    this.storage.remove("isUserLoggedIn");
    //  this.router.navigateByUrl("/login");
    this.navCtrl.navigateForward("/login");
  }
}
