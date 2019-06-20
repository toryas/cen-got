import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/domain/character.domain';

class IceAndFireServiceMock{

}

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      providers:[
        NgbActiveModal,
        {provide:IceAndFireService,useClass:IceAndFireServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    let character =  new Character("","","","","","","","","","","");
    component.character = character;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
