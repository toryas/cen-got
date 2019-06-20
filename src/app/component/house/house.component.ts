import { Component, OnInit, Input } from '@angular/core';
import { House } from 'src/app/domain/house.domain';

@Component({
  selector: 'comp-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() house:House; 

  constructor() { }

  ngOnInit() {
  }

}
