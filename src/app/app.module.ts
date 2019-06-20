import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseComponent } from './component/house/house.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterComponent } from './component/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { HouseDetailComponent } from './component/house-detail/house-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseComponent,
    CharacterComponent,
    CharactersComponent,
    NavbarComponent,
    CharacterDetailComponent,
    HouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
