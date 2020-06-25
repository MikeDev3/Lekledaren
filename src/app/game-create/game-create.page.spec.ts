import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameCreatePage } from './game-create.page';

describe('GameCreatePage', () => {
  let component: GameCreatePage;
  let fixture: ComponentFixture<GameCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
