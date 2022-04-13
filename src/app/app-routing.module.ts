import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

const routes: Routes = [
  {
    path:"public",
    component:PublicComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      }

    ]
  },
  {
    path:"secure",
    component:SecureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
