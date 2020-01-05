import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JsonusersPage } from './jsonusers.page';

describe('JsonusersPage', () => {
  let component: JsonusersPage;
  let fixture: ComponentFixture<JsonusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonusersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
