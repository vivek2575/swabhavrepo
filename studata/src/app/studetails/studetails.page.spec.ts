import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudetailsPage } from './studetails.page';

describe('StudetailsPage', () => {
  let component: StudetailsPage;
  let fixture: ComponentFixture<StudetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
