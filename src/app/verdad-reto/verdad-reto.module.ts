import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerdadRetoPage } from './verdad-reto.page';

const routes: Routes = [
  {
    path: '',
    component: VerdadRetoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerdadRetoPage]
})
export class VerdadRetoPageModule {}
