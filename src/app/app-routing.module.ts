import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogComponent } from './components/blog/blog.component';
import { PlayersComponent } from './components/players/players.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlayComponent } from './components/add-play/add-play.component';
import { AddMatchComponent } from './components/add-match/add-match.component';

const routes: Routes = [
  { path: 'home', 
  component: HomeComponent 
},
{ path: 'contact', 
  component: ContactComponent 
},
{ path: 'matches', 
  component: MatchesComponent 
},
{ path: 'players', 
  component: PlayersComponent 
},
{ path: 'blog', 
  component: BlogComponent 
},

{ path: 'login', 
  component: LoginComponent 
}
,
{ path: 'signup', 
  component: SignupComponent 
},

{ path: 'addplayer', 
  component: AddPlayComponent 
},

{ path: 'addmatch', 
  component: AddMatchComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
