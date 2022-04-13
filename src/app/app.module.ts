import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
