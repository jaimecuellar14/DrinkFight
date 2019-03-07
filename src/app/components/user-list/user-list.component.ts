import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../services/category-service.service';
import { Storage } from '@ionic/storage';
import { UsersComponent } from '../users/users.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  num_jugadores:number;
  constructor(private categoryService: CategoryServiceService, private storage:Storage, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async cerrarPopover(){
    console.log(this.num_jugadores);
    this.storage.set("num_players",this.num_jugadores);
    let popover = this.categoryService.getPopoverCtrl();
    try{
      await popover.dismiss();
      this.presentPopover("open");
    }
    catch(e){
      console.log(e);
    }
  }

  async presentPopover(ev: any) {
   const popover = await this.popoverCtrl.create({
     component: UsersComponent,
     event: ev,
     translucent: true
   });
   this.categoryService.setPopoverCtrl(popover);
   return await popover.present();
 }
}
