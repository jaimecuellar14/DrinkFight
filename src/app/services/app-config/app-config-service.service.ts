import { Injectable } from '@angular/core';
import { spotifyApiConfig } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppConfigServiceService {

  private appConfig:any;
  constructor() { }

  loadConfig(){
    return spotifyApiConfig;
  }
}
