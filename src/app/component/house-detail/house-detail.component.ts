import { Component,  Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { House } from 'src/app/domain/house.domain';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';

@Component({
  selector: 'comp-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit{

  @Input() house:House;
  currentLordName:String;

  constructor(private activeModal:NgbActiveModal,
            private iaf:IceAndFireService) { }

  ngOnInit(){
    this.loadCurrentLordName();
  }

  /**
   * Carga nombre de currentLord
   */
  loadCurrentLordName(){
    let _idChar = this.house.currentLord.split("/");
    if(_idChar.length === 6 ){
      this.iaf.getCharactersById(_idChar[5]).subscribe(character =>{
        this.currentLordName = character.name;
      });
    }
  }

}
