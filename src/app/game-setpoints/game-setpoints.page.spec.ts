import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameSetpointsPage } from './game-setpoints.page';

describe('GameSetpointsPage', () => {
  let component: GameSetpointsPage;
  let fixture: ComponentFixture<GameSetpointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSetpointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameSetpointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
