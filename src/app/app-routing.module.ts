import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Add RouterModule and Routes by importing them
import { RouterModule, Routes  } from '@angular/router';
//Add components by importing them
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { AlbumsComponent } from './modules/albums/components/albums/albums.component';

//Create router paths
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
