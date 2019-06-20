import { Component, OnInit } from '@angular/core';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';
import { House } from "../../domain/house.domain";

@Component({
  selector: 'page-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  private page = 1;
  public houses: House[] =  new Array<House>();

  constructor(private iaf: IceAndFireService) { }

  ngOnInit() {
    this.loadHouses();
  }

  /**
   * Carga listado de casas
   */
  loadHouses() {
    this.iaf.getAllHouses(this.page).subscribe(data => {
      console.log(data);
      this.houses.push(...data)
    });
  }

  /**
   * Carga una pagina más de casas
   */
  onBottom() {
    this.page++;
    this.loadHouses();
  }



}
