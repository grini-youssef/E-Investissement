import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { InvestirComponent } from './components/investir/investir.component';
import { ProjetsExistentComponent } from './components/projets-existent/projets-existent.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'investir', component: InvestirComponent },
  { path: 'projetsExistant', component: ProjetsExistentComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
