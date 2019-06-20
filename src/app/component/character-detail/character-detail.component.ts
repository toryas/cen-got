import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/domain/character.domain';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';

@Component({
  selector: 'comp-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit{

  @Input() character: Character;
  fatherName:String;
  motherName:String;
  spouseName:String;

  constructor(private activeModal:NgbActiveModal,private iaf:IceAndFireService) { }

  ngOnInit(){
    this.loadFather();
    this.loadMother();
    this.loadSpuose();
  }

  /**
   * Carga informacion de padre
   */
  loadFather(){
    let _idChar = this.character.father.split("/");
    if(_idChar.length === 6 ){
      this.iaf.getCharactersById(_idChar[5]).subscribe(character =>{
        this.fatherName = character.name;
      });
    }
  }

  /**
   * Carga informacion de madre
   */
  loadMother(){
    let _idChar = this.character.mother.split("/");
    if(_idChar.length === 6 ){
      this.iaf.getCharactersById(_idChar[5]).subscribe(character =>{
        this.motherName = character.name;
      });
    }
  }

  /**
   * Carga informacion de esposa
   */
  loadSpuose(){
    let _idChar = this.character.spouse.split("/");
    if(_idChar.length === 6 ){
      this.iaf.getCharactersById(_idChar[5]).subscribe(character =>{
        this.spouseName = character.name;
      });
    }
  }

}
