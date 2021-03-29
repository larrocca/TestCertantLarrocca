import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainComponent } from './Components/main/main.component';
import { InfoComponent } from './Components/info/info.component';
import { Pokemon } from './Models/pokemon/pokemon';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'main',component: MainComponent},
  {path:'main/:logeado',component: MainComponent},
  {path:'info/:pokemon',component: InfoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
