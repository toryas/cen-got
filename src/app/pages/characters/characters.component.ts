import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/domain/character.domain';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';

@Component({
  selector: 'page-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private page = 1;
  public characters:Character[] = new Array<Character>();

  constructor(private iaf:IceAndFireService) { }

  ngOnInit() {
    this.loadChareacters();
  }

  /**
   * Carga arreglo de personajes
   */
  loadChareacters(){
    this.iaf.getAllCharacters(this.page).subscribe(characters =>{
      this.characters.push(...characters);
    });
  }

   /**
   * Carga una pagina más de personajes
   */
  onBottom() {
    this.page++;
    this.loadChareacters();
  }


}
