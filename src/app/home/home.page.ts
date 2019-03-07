import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage:Storage, private router:Router){
    this.checkSlideShow();
  }

  checkSlideShow(){
    this.storage.get("showSlide").then(x=>{
      if (x==undefined){
        console.log("primera vez");
        this.storage.set("showSlide",false);
      }else{
        console.log("no primera vez");
        this.router.navigate(['/main']);
      }
    });
  }

  irMain(){
    this.router.navigate(['/main']);
  }
}
