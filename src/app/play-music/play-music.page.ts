import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import { SpotifyApiService } from '../services/spotify/spotify-api.service';
import { UserListComponent } from '../components/user-list/user-list.component';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



import SpotifyWebApi from 'spotify-web-api-js';

@Component({
  selector: 'app-play-music',
  templateUrl: './play-music.page.html',
  styleUrls: ['./play-music.page.scss'],
})
export class PlayMusicPage implements OnInit {
  categoryData:any;
  playLists:any;
  constructor(private categoryService: CategoryServiceService, private spotifyService: SpotifyApiService,
    private router:Router, private storage:Storage) { }

  ngOnInit() {
    this.checkData();
    this.getCategoryPlayList();
  }

  checkData(){
    this.categoryData = this.categoryService.getCategoryData();
    console.log(this.categoryData);
  }

  getCategoryPlayList(){
    let spotifyObject = this.spotifyService.getApiObject();
    spotifyObject.getCategoryPlaylists(this.categoryData.id).then(data => {
      this.playLists = data.playlists.items;
      for (let i=0; i<this.playLists.length;i++){
        let obj = this.playLists[i];
        obj['model']=false;
        this.playLists[i]=obj;
      }
      console.log(this.playLists);

    },err => {
      console.log(err);
    });
  }

  getTracks(x){
    let canciones= new Array();
    let spotifyObject = this.spotifyService.getApiObject();
    x.forEach(function(c){
      spotifyObject.getPlaylistTracks(c).then(data => {
        canciones.push(data.items);
      });
    });
    console.log(canciones);
    this.spotifyService.setCanciones(canciones);
    this.router.navigate(['/jugar']);
  }

  IrJuego(){
    console.log("jugando");
    console.log(this.playLists);
    let playlists = new Array();
    for (var i=0; i<this.playLists.length;i++){
      if (this.playLists[i].model==true){
        console.log(this.playLists[i].name);
        console.log(this.playLists[i].id);
        playlists.push(this.playLists[i].id);
      }
    }

    this.getTracks(playlists);
  }
}
