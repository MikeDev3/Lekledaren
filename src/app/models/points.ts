import { Team } from './team';
import { Game } from './game';

export class Points {
    TeamID:number;
    GameID:number;
    TeamPoints:number;
    EventID: number;
    PointsID:number;
    Team: Team;
    Game: Game;
    Event: Event;
}
