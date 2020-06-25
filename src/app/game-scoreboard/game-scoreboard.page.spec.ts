import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameScoreboardPage } from './game-scoreboard.page';

describe('GameScoreboardPage', () => {
  let component: GameScoreboardPage;
  let fixture: ComponentFixture<GameScoreboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameScoreboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameScoreboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
