import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LondresComponent } from './components/londres/londres.component';
import { NewyorkComponent } from './components/newyork/newyork.component';
import { TokyoComponent } from './components/tokyo/tokyo.component';
import { VeneciaComponent } from './components/venecia/venecia.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "newyork",
    component: NewyorkComponent
  },
  {
    path: "tokyo",
    component: TokyoComponent
  },
  {
    path: "londres",
    component: LondresComponent
  },
  {
    path:"venecia",
    component: VeneciaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
