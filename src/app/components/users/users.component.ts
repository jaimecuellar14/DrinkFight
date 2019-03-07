import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CategoryServiceService } from '../../services/category-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  checked:boolean=true;
  players:any;
  constructor(private storage:Storage, private categoryService:CategoryServiceService) { }

  ngOnInit() {
    this.getJugadores();
  }

  getJugadores(){
    this.storage.get("num_players").then(x =>{
      if (x){
        this.players = new Array(x);
        for (let i=0; i<this.players.length;i++){
          this.players[i] = { name: ""};
        }
      }else{
        console.log("error");
      }
    });
  }

  async listo(){
    for (let i=0; i<this.players.length;i++){
      console.log(this.players[i]);
    }
    this.storage.set('players', this.players);
    let popover = this.categoryService.getPopoverCtrl();
    try {
      await popover.dismiss();
    }
    catch(e){
      console.log(e);
    }
  }
}
