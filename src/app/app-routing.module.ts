import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetaileComponent } from './detaile/detaile.component';
import { AddempComponent } from './addemp/addemp.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"detaile/:id",component:DetaileComponent
  },
  {
    path:"addemp",component:AddempComponent
  },
  {
    path:"updateEmp/:id",component:AddempComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
