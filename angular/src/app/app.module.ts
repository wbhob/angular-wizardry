import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HelloWorldService } from './hello-world.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    HelloWorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
