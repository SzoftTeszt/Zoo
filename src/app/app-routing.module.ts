import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnimalsComponent } from './animals/animals.component';
import { HelpCompComponent } from './help-comp/help-comp.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"animals", component:AnimalsComponent},
  {path:"help", component:HelpCompComponent},
  {path:"", component:LoginComponent},
  {path:"**", component:HelpCompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
