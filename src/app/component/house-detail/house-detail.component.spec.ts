import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailComponent } from './house-detail.component';
import { IceAndFireService } from 'src/app/services/ice-and-fire.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { House } from 'src/app/domain/house.domain';

class IceAndFireServiceMock{

}

describe('HouseDetailComponent', () => {
  let component: HouseDetailComponent;
  let fixture: ComponentFixture<HouseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDetailComponent ],
      providers:[
        NgbActiveModal,
        {provide:IceAndFireService,useClass:IceAndFireServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDetailComponent);
    component = fixture.componentInstance;
    component.house =  new House("","","","");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
