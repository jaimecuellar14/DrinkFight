import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';


@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {
  spotifyApi = new SpotifyWebApi();
  token:any;
  canciones:any;
  constructor() { }

  setToken(token){
    this.token = token;
    this.spotifyApi.setAccessToken(token);
  }

  setCanciones(canciones){
    this.canciones = canciones;
  }

  filterCanciones(canciones){
    console.log("metodo filtrado")
    let cancionesCorrectas = new Array();
    console.log(this.canciones);
    this.canciones.forEach(function(val){
      //console.log(val);
      val.forEach(function(track){
      //  console.log(track);
        if (track.track.preview_url!=null){
          //console.log(track);
          cancionesCorrectas.push({"name":track.track.name, "preview_url": track.track.preview_url});
        }
      })
    });
    //console.log(cancionesCorrectas)
    return cancionesCorrectas;
  }

  getCanciones(){
    return this.canciones;
  }
  getToken(){
    return this.token;
  }
  getApiObject(){
    return this.spotifyApi;
  }
}
