import { TestBed } from '@angular/core/testing';

import { IceAndFireService } from './ice-and-fire.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { House } from '../domain/house.domain';
import { Character } from '../domain/character.domain';


class HttpClientMock {
  call = 0;

  get(arg: string) {

    let json_h = {
      "url": "https://anapioficeandfire.com/api/houses/1",
      "name": "House Algood",
      "region": "The Westerlands",
      "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/229",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    }

    let json_c = {
      "url": "https://anapioficeandfire.com/api/characters/1",
      "name": "",
      "gender": "Female",
      "culture": "Braavosi",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "The Daughter of the Dusk"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    }

    switch (true) {
      case (arg.includes("houses?page")): return of([json_h, json_h]);
      case (arg.includes("characters?page")): return of([json_c, json_c]);
      case (arg.includes("houses")): return of(json_h);
      case (arg.includes("characters")): return of(json_c);

    }
  }
}

describe('IceAndFireService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useClass: HttpClientMock }
    ]
  }));

  it('should be created', () => {
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    expect(service).toBeTruthy();
  });

  it('getAllHouses should return an array with two House', () => {
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    service.getAllHouses().subscribe(resp => {
      expect(resp.length).toBe(2);
      expect(resp[0] instanceof House).toBeTruthy();
    });
  })

  it('getAllCharacters should return an array with two Character', () => {
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    service.getAllCharacters().subscribe(resp => {
      expect(resp.length).toBe(2);
      expect(resp[0] instanceof Character).toBeTruthy();
    });
  })

  it('getHousesById should return an House Object',()=>{
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    service.getHousesById(1).subscribe(resp=>{
      expect(resp instanceof House).toBeTruthy();
    })
  });

  it('getCharactersById should return an Character Object',()=>{
    const service: IceAndFireService = TestBed.get(IceAndFireService);
    service.getCharactersById(1).subscribe(resp=>{
      expect(resp instanceof Character).toBeTruthy();
    })
  });


});
