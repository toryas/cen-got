import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { House } from '../domain/house.domain';
import { map } from 'rxjs/operators';
import { Character } from '../domain/character.domain';

@Injectable({
  providedIn: 'root'
})
export class IceAndFireService {

  private basePath = "https://anapioficeandfire.com/api";

  constructor(private http: HttpClient) {

  }


  /**
   * Obtiene listado de casas desde API anapioficeandfire
   * 
   * @returns {House[]}
   */
  getAllHouses(page=1) {
    return this.http.get(`${this.basePath}/houses?page=${page}&pageSize=50`).pipe(
      map(data => {
        let array: House[] = new Array();
        for (let index in data) {
          let { name, region, words, currentLord } = data[index];
          array.push(new House(name, region, words, currentLord))
        }
        return array;
      }))
  }

  /**
   * Obtiene la informacion de una casa a partir de su identificador
   * @param id identificador de casa
   * @returns {House} casa
   */
  getHousesById(id) {
    return this.http.get(`${this.basePath}/houses/${id}`).pipe(
      map(async data => {
        let array: House[] = new Array();
        for (let index in data) {
          let { name, region, words, currentLord } = data[index];
          array.push(new House(name, region, words, currentLord))
        }
        return array;
      }))
  }

  /**
   * Obtiene la informacion de un personaje a partir de su identificador
   * @param id identificador del personaje
   * @returns {Character} personaje
   */
  getCharactersById(id) {
    return this.http.get(`${this.basePath}/characters/${id}`).pipe(
      map((data: any) => {
        let { name, gender, culture, born, died, titles, aliases, father, mother, spouse, allegiances } = data;
        return new Character(name, gender, culture, born, died, titles, aliases, father, mother, spouse, allegiances);
      })
    )
  }
}
