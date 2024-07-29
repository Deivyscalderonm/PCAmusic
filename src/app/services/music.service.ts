import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})

export class MusicService {
  /*Declaramos Variables */
  urlServer = "https://music.fly.dev"
  /*fin declaracion de variables */

  httpHeaders = { headers: new HttpHeaders({ "contents-Type": "application/json" }) };

  constructor(private http: HttpClient) { }

  /*Creamos el primer servicio de get para obtener los artistas*/

  getArtistsJson(){
    return dataArtists;
  }

  getArtists() {
  //  return this.http.get(`${this.urlServer}/artists`, this.httpHeaders)
    return fetch(`${this.urlServer}/artists`).then(
      response => response.json()
    )
  }

  // getArtistTracks(artist_id:number){
  //   return fetch(`${this.urlServer}/tracks/artist/${artist_id}`).then(
  //     response => response.json()
  //   )
  // }
}