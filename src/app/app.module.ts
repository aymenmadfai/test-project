import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { PlayersComponent } from './components/players/players.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { ScoresComponent } from './components/scores/scores.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlayComponent } from './components/add-play/add-play.component';
import { AddMatchComponent } from './components/add-match/add-match.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MatchesComponent,
    BlogComponent,
    PlayersComponent,
    HeaderComponent,
    FooterComponent,
    WorldCupComponent,
    ResultsComponent,
    NewsComponent,
    ScoresComponent,
    BlogHomeComponent,
    LoginComponent,
    SignupComponent,
    AddPlayComponent,
    AddMatchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
