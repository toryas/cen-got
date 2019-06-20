import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './pages/houses/houses.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './component/character-detail/character-detail.component';
import { HouseDetailComponent } from './component/house-detail/house-detail.component';

const routes: Routes = [
  { path: 'houses' , component : HousesComponent, data: { depth: 'houses' }},
  { path: 'characters', component: CharactersComponent,data: { depth: 'characters' }},
  { path: 'character-detail', component:CharacterDetailComponent},
  { path: 'house-detail', component:HouseDetailComponent},
  { path: '**' , component : HousesComponent, data: { depth: 'houses' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
