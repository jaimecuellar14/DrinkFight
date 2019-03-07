import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../services/category-service.service';
import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { AppConfigServiceService } from '../services/app-config/app-config-service.service';

declare var cordova:any;
@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {
  result ={};
//  spotifyApi = new SpotifyWebApi();
  loading=false;
  categorias={};
  config:any;

  constructor(private nav: NavController , private http: HttpClient, private storage:Storage, private plt:Platform,
    private loadingCtrl:LoadingController,private router:Router,private categoryService: CategoryServiceService,
    private spotifyService: SpotifyApiService, private appConfig: AppConfigServiceService) {
    this.plt.ready().then(()=>{
      this.storage.get("logged_in_spotify").then(res => {
        if (res){
          this.spotifyAuth(true);
        }
      });
    });
   }
  ngOnInit() {
  //  this.getCategories();
  //public AKIAID5M5U5UI3KS2FHA
  // secret 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
  this.getSpotifyConfig();
  }

  getSpotifyConfig(){
    this.config = this.appConfig.loadConfig();
    console.log(this.config);
  }
  async presentLoading(){
      const loading = await this.loadingCtrl.create({
        message:"Cargando"
      });
      return await loading.present();
  }

  async stopLoading(){
    return await this.loadingCtrl.dismiss();
  }
  async spotifyAuth(loading=false){
    const loadingSpinner = await this.loadingCtrl.create({
      message:"Logeandose a Spotify"
    });
    /*const config = {
      clientId: "663cef411bf44adfb92de486f5a10bc6",
      redirectUrl: "http://localhost:8100",
      scopes: ["streaming"], // see Spotify Dev console for all scopes
      tokenExchangeUrl: "https://uun6zd0tac.execute-api.eu-central-1.amazonaws.com/dev/exchange",
      tokenRefreshUrl: "https://uun6zd0tac.execute-api.eu-central-1.amazonaws.com/dev/refresh",
    };*/

    if (loading){
      await loadingSpinner.present();
    }
    cordova.plugins.spotifyAuth.authorize(this.config)
    .then(({ accessToken, expiresAt, encryptedRefreshToken }) => {
      console.log(`Got an access token, its ${accessToken}!`);
      console.log(`Its going to expire in ${expiresAt - Date.now()}ms.`);
      this.result = {access_token:accessToken, expires_in:expiresAt,ref:encryptedRefreshToken};
      console.log(this.result);
      loadingSpinner.dismiss();
      this.spotifyService.setToken(accessToken);
      //this.spotifyApi.setAccessToken(accessToken);
      this.storage.set("logged_in_spotify",true);
      this.getCategories();
    }, err=>{
      loadingSpinner.dismiss();
    });
  }

  async getCategories(){
    const loadingSpinner = await this.loadingCtrl.create({message:"Cargando las categorias"});
    await loadingSpinner.present();

    let spotifyObject = this.spotifyService.getApiObject();
      spotifyObject.getCategories().then(data => {
      this.categorias=data.categories.items;
      console.log(this.categorias);
      loadingSpinner.dismiss();
    },err =>{
      console.log(err);
      loadingSpinner.dismiss();
    });
  }

  play(name, icon, id){
    this.categoryService.setCatogryData(name,icon,id);
    console.log(name);
    console.log(icon);
    console.log(id);
    this.nav.navigateForward('/play-music')
  }
}
