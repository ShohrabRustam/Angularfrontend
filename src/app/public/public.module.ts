import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '../public/public.component';

import { UsersComponent } from '../components/users/users.component';
import { SecureComponent } from '../secure/secure.component';
import { HomeComponent } from '../public/home/home.component';
import { LoginComponent } from '../public/login/login.component';



@NgModule({
  declarations: [
    PublicComponent,
    UsersComponent,
    SecureComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class PublicModule { }
