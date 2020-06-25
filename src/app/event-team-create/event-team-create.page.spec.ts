import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventTeamCreatePage } from './event-team-create.page';

describe('EventTeamCreatePage', () => {
  let component: EventTeamCreatePage;
  let fixture: ComponentFixture<EventTeamCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTeamCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventTeamCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
