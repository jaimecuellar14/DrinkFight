import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-verdad-reto',
  templateUrl: './verdad-reto.page.html',
  styleUrls: ['./verdad-reto.page.scss'],
})
export class VerdadRetoPage implements OnInit {

  constructor(public popoverCtrl: PopoverController,private categoryService:CategoryServiceService) { }

  ngOnInit() {
  }

  mostrarJugadores(){
    this.presentPopover("open");
  }

  async presentPopover(ev: any) {
   const popover = await this.popoverCtrl.create({
     component: JugadoresComponent,
     event: ev,
     translucent: true
   });
   this.categoryService.setPopoverCtrl(popover);
   return await popover.present();
 }

}
