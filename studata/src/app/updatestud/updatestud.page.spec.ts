import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatestudPage } from './updatestud.page';

describe('UpdatestudPage', () => {
  let component: UpdatestudPage;
  let fixture: ComponentFixture<UpdatestudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatestudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
