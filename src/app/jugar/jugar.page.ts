import { Component, OnInit } from '@angular/core';
  import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { AppConfigServiceService } from '../services/app-config/app-config-service.service';



declare var cordova:any;

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {

  currentTrack: MediaObject = null;
  contador:number=5;
  currentPlayer:any;
  songStopped:boolean=false;
  playing:boolean=false;
  opciones:any;
  currentSong:string="";
  arr1:any;
  arr2:any;
  constructor(private storage:Storage, private spotifyService:SpotifyApiService,private appConfig: AppConfigServiceService
  , private media: Media) { }

  ngOnInit() {
    this.starTimer();
    this.getCurrentPlayer();
  }


  starTimer(){
    var intervalVal = setInterval(function(){
      this.currentTrack = this.media.create("../../assets/audio/beep_countdown.wav");
      this.currentTrack.play();
      this.contador--;
      if (this.contador==0){
        clearInterval(intervalVal);
        this.currentTrack.pause();
        this.escuchar();
      }
    }.bind(this),1000);
  }

  escuchar(){
    let canciones = this.spotifyService.getCanciones();
    //console.log(canciones);
    let config = this.appConfig.loadConfig();
    var clientId = config.clientId;
    var token = this.spotifyService.getToken();
    //console.log(cordova.plugins);
    let spotify = this.spotifyService.getApiObject();

    let canciones_correctas = this.spotifyService.filterCanciones(canciones);
    console.log(canciones_correctas);
    this.opciones = new Array();
    let random = Math.floor(Math.random() * canciones_correctas.length-1) + 0 ;
    this.currentSong = canciones_correctas[random].name;
    this.currentTrack = this.media.create(canciones_correctas[random].preview_url);
    for (let i=0; i<3;i++){
      let ran = Math.floor(Math.random() * canciones_correctas.length-1) + 0 ;
      if (ran !=random){
        this.opciones.push(canciones_correctas[ran])
      }
    }
    this.opciones.push(canciones_correctas[random]);
    this.swapArray(this.opciones);

    this.arr1 = this.opciones.slice(0,2);
    this.arr2 = this.opciones.slice(2,4);
    console.log(this.opciones);
    this.playing=true;
    //this.currentTrack = this.media.create(canciones[0][3].track.preview_url);
    this.currentTrack.onStatusUpdate.subscribe(status =>{
      console.log(status);
      if (status==4){
        console.log("la cancion termino");
        this.songStopped=true;
      }
    }); // fires when file status changes
    this.currentTrack.play();
  }


  getCurrentPlayer(){
    let totalPlayers;
    this.storage.get("players").then(x => {
        if (x){
          console.log(x);
          totalPlayers = x.length;
          this.currentPlayer=x[0];
          console.log(this.currentPlayer);
        }
    });
  }

  verificarRespuesta(answer){
    this.playing=false;
    this.currentTrack.pause();
    if (answer ==this.currentSong){
      alert("correcto");
      this.contador=5;
      this.starTimer();
    }else{
      this.contador=5;
      this.starTimer();
      alert("la cagaste");
    }
  }

  swapArray(arra1){
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }
}
