import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  // {
  //   path: 'home',
  //    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[LoginGuard]
  // },
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },

  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule),canActivate:[IntroGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),canActivate:[LoginGuard]
  },
  {
    path: 'song-modal',
    loadChildren: () => import('./song-modal/song-modal.module').then( m => m.SongModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
