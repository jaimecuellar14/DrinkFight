import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController } from '@ionic/angular';
import { CategoryServiceService } from '../../services/category-service.service';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

  jugadores:any;
  agregar:boolean=false;
  constructor(private categoryService: CategoryServiceService, private storage:Storage, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.getJugadores();
  }

  async close(){
    //let popover = this.categoryService.getPopoverCtrl();
    try{
      await this.popoverCtrl.dismiss();
      //this.presentPopover("open");
    }
    catch(e){
      console.log(e);
    }
  }
  addPlayer(playerName)
  {
    this.jugadores.push({name:playerName});
    this.updatePlayers();
  }
  deletePlayer(name)
  {
    for(var i=0;i<this.jugadores.length;i++)
    {
      if (this.jugadores[i].name==name)
      {
        this.jugadores.splice(i,1);
      }
    }
    this.updatePlayers();
    console.log(this.jugadores);
  }

  getJugadores(){
    this.storage.get("players").then(x =>{
      if (x){
        console.log("hay jugadores inscritos");
        this.jugadores = x;
      }else{
        console.log("no hay jugadores");
      }
    });
  }

  updatePlayers()
  {
    this.storage.set("players",this.jugadores);
  }
}
