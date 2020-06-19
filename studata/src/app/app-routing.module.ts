import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addstud',
    loadChildren: () => import('./addstud/addstud.module').then( m => m.AddstudPageModule)
  },
  
  {
    path: 'studetails',
    loadChildren: () => import('./studetails/studetails.module').then( m => m.StudetailsPageModule)
  },
  
  {
    path: 'deletestud/:id',
    loadChildren: () => import('./deletestud/deletestud.module').then( m => m.DeletestudPageModule)
  },
  
  {
    path: 'updatestud/:id',
    loadChildren: () => import('./updatestud/updatestud.module').then( m => m.UpdatestudPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
