import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { SkillComponent } from './skill/skill.component';
import { PersonRowComponent } from './person-row/person-row.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EndorseComponent } from './endorse/endorse.component';
import { LoginComponent } from './login/login.component';
import { PersonRowSmallComponent } from './person-row-small/person-row-small.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    SkillComponent,
    PersonRowComponent,
    HomeComponent,
    ProfileComponent,
    EndorseComponent,
    LoginComponent,
    PersonRowSmallComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
