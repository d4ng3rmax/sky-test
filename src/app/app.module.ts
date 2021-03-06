import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { MoviesService } from './movies.service';
import { CategoryPipe } from './pipes/category.pipe';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Sky Test - Gabriel Silveira' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ MoviesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
