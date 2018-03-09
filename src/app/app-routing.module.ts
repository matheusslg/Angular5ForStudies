import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes criados anteriormente
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  // rota para a Index
  {
    path: '',
    component: HomeComponent
  },

  // rota para a página Sobre
  {
    path: 'about/:id', // esse :id é um parâmetro de rota
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
