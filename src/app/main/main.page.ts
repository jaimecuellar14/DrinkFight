import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserListComponent } from '../components/user-list/user-list.component';
import { CategoryServiceService } from '../services/category-service.service';
import { Storage } from '@ionic/storage';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router, public popoverCtrl: PopoverController,private categoryService:CategoryServiceService,
              private storage:Storage) { }

  ngOnInit() {
    this.checknumPlayers();
  }
  irJuegoMusica(){
    console.log("yendo a juego de musica");
    this.router.navigate(["/musica"]);
  }

  irVerdadReto(){
    this.router.navigate(["/verdad-reto"]);
  }

//Muestra si hay jugadores inscritos
//Si no los hay muestra popOver para agregar
  checknumPlayers(){
    this.storage.get("players").then(x =>{
      if (x){
        console.log("hay jugadores inscritos");
      }else{
      this.presentPopover("open");
      }
    });
  }


//Mostramos popoover para agregar jugadores
  async presentPopover(ev: any) {
   const popover = await this.popoverCtrl.create({
     component: UserListComponent,
     event: ev,
     translucent: true
   });
   this.categoryService.setPopoverCtrl(popover);
   return await popover.present();
 }

 mostrarJugadores(){
   this.popOverJugadores("open");
 }

 async popOverJugadores(ev: any) {
  const popover = await this.popoverCtrl.create({
    component: JugadoresComponent,
    event: ev,
    translucent: true
  });
  this.categoryService.setPopoverCtrl(popover);
  return await popover.present();
}


}
