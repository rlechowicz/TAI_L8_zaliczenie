import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
