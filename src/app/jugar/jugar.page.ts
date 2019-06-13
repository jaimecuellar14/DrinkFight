import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Storage } from '@ionic/storage';
import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { AppConfigServiceService } from '../services/app-config/app-config-service.service';
import { UserTurnService } from '../services/user-turn/user-turn.service';


declare var cordova:any;

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {

  currentTrack: MediaObject = null;
  contador:number=5;
  successTrack:MediaObject=null;
  errorTrack:MediaObject=null;
  countdownTrack:MediaObject=null;
  currentPlayer:any;
  jugadores:any = new Array();
  songStopped:boolean=false;
  playing:boolean=false;
  opciones:any;
  currentSong:string="";
  totalJugadores:number;
  jugadorActual:number=0;
  arr1:any;
  arr2:any;
  constructor(private storage:Storage, private spotifyService:SpotifyApiService,private appConfig: AppConfigServiceService
  , private media: Media, private platform:Platform) {

      this.platform.backButton.subscribe(()=>{
        if (this.currentTrack !=null){
          this.currentTrack.release();
        }
      });
   }

  ngOnInit() {
    this.fillJugadores();
    this.starTimer();
    this.getCurrentPlayer();
  }



  playSuccess(audio){
    this.successTrack = this.media.create(audio);
    console.log(this.successTrack);
    this.successTrack.onStatusUpdate.subscribe(status =>{
      console.log(status);
    });
    this.successTrack.onError.subscribe(status =>{
      console.log(status);
    });
    this.successTrack.play();
  }
  playError(audio){
    this.errorTrack = this.media.create(audio);
    console.log(this.errorTrack);
    this.errorTrack.onStatusUpdate.subscribe(status =>{
      console.log(status);
    });
    this.errorTrack.onError.subscribe(status =>{
      console.log(status);
    });
    this.errorTrack.play();
  }

  playCountdown(audio){
    this.countdownTrack = this.media.create(audio);
    console.log(this.countdownTrack);
    this.countdownTrack.onStatusUpdate.subscribe(status =>{
      console.log(status);
    });
    this.countdownTrack.onError.subscribe(status =>{
      console.log(status);
    });
    this.countdownTrack.play();
  }
  starTimer(){
    var intervalVal = setInterval(function(){
    //  this.playCountdown("../../assets/audio/beep_countdown.mp3");
      this.contador--;
      if (this.contador==0){
        clearInterval(intervalVal);
      //  this.countdownTrack.release();
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
  //  console.log(canciones_correctas);
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
    //console.log(this.opciones);
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


  fillJugadores(){
    this.storage.get("players").then(x=>{
      if (x){
        for (var i=0; i<x.length;i++){
          this.jugadores.push({"nombre":x.name,"puntuacion":0});
        }
      }
    });
  //  console.log(this.jugadores);
  }

  checkPlayer(num){
    let respuesta:boolean;
    for (var i=0; i<this.jugadores.length;i++){
      if (this.currentPlayer.name == this.jugadores[i].name){
        if (num==1){
          this.jugadores[i].puntuacion++;
        }
      }
    }
    console.log(this.jugadores)
  }
  getCurrentPlayer(){
    this.storage.get("players").then(x => {
        if (x){
        //  console.log(x);
          this.totalJugadores = x.length;
          this.currentPlayer=x[this.jugadorActual];
          //console.log(this.currentPlayer);
        }
    });
  }

  verificarRespuesta(answer){
    this.playing=false;
    this.currentTrack.release();
    if (answer ==this.currentSong){
      this.checkPlayer(1);
      //this.playSuccess("../../assets/audio/success.mp3");
      alert("correcto");
      if (this.jugadorActual >= this.totalJugadores -1){
        this.jugadorActual = 0;
      }
      else{
        this.jugadorActual++;
      }
      this.getCurrentPlayer();
      this.contador=5;
      this.starTimer();
    }else{
      this.checkPlayer(0);
    //  this.playError("../../assets/audio/error.mp3");
      this.contador=5;
      if (this.jugadorActual >= this.totalJugadores -1){
        this.jugadorActual = 0;
      }
      else{
        this.jugadorActual++;
      }
      this.getCurrentPlayer();
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
