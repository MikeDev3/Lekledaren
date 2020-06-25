import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventTeamsPage } from './event-teams.page';

describe('EventTeamsPage', () => {
  let component: EventTeamsPage;
  let fixture: ComponentFixture<EventTeamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTeamsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventTeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
