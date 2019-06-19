import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/domain/house.domain';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  public house:House;

  constructor() { }

  ngOnInit() {
  }

}
