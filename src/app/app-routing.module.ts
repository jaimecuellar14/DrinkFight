import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'musica', loadChildren: './musica/musica.module#MusicaPageModule' },
  { path: 'play-music', loadChildren: './play-music/play-music.module#PlayMusicPageModule' },
  { path: 'jugar', loadChildren: './jugar/jugar.module#JugarPageModule' },
  { path: 'verdad-reto', loadChildren: './verdad-reto/verdad-reto.module#VerdadRetoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
