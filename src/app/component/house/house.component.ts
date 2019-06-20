import { Component, Input } from '@angular/core';
import { House } from 'src/app/domain/house.domain';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HouseDetailComponent } from '../house-detail/house-detail.component';

@Component({
  selector: 'comp-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  @Input() house: House;

  constructor(private modalService: NgbModal) { }

  /**
   * Levanta model de detalle de casa
   */
  toDetail() {
    const modalRef = this.modalService.open(HouseDetailComponent);
    modalRef.componentInstance.house = this.house;
  }

}
