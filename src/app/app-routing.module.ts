import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'skill', component: SkillComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
