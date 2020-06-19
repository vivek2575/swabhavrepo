import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddstudPage } from './addstud.page';

describe('AddstudPage', () => {
  let component: AddstudPage;
  let fixture: ComponentFixture<AddstudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddstudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
