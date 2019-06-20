import { Component, Input } from '@angular/core';
import { Character } from 'src/app/domain/character.domain';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

@Component({
  selector: 'comp-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character:Character;

  constructor(private modalService: NgbModal) { }

  /**
   * Levanta modal con detalle de personaje
   */
  toDetail(){
    const modalRef = this.modalService.open(CharacterDetailComponent);
    modalRef.componentInstance.character = this.character;
  }

}
