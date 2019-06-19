import { Component, OnInit } from '@angular/core';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';
import { House } from "../../domain/house.domain";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  public houses: House[];

  constructor(private iaf: IceAndFireService) { }

  ngOnInit() {
    this.loadHouses();
  }

  /**
   * Carga listado de casas
   */
  loadHouses() {
    this.iaf.getAllHouses().subscribe(data => {
      this.houses = data;
    });
  }



}
