import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletestudPage } from './deletestud.page';

describe('DeletestudPage', () => {
  let component: DeletestudPage;
  let fixture: ComponentFixture<DeletestudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletestudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletestudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
