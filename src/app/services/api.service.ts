import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Event } from '../models/event';
import { Game } from '../models/game';
import { Errormodel } from '../models/errormodel';
import { ContestantAccount } from '../models/contestant-account';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Contestant } from '../models/contestant';
import { Team } from '../models/team';
import { Points } from '../models/points';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  msg : Errormodel
  // API path
  base_path = 'https://www.mikeportfolio.se/api/events';
  contestants_base_path ='https://www.mikeportfolio.se/api/Contestants';
  login_base_path ='https://www.mikeportfolio.se/api/Login';
  games_base_path ='https://www.mikeportfolio.se/api/Games';
  teams_base_path ='https://www.mikeportfolio.se/api/Teams';
  points_base_path ='https://www.mikeportfolio.se/api/Points';
  eventscores_base_path ='https://www.mikeportfolio.se/api/Points/GetEventScores/?id=';

  users_base_path ='https://www.mikeportfolio.se/api/Contestant/GetContestantByEmail/?email=';
  adminEvents_base_path ='https://www.mikeportfolio.se/api/Events/GetEventByAdminID/?id=';
  contestantEvents_base_path ='https://www.mikeportfolio.se/api/Events/GetContestantEvents/';
  eventGames_base_path ='https://www.mikeportfolio.se/api/Games/GetGameByEventID/?id=';
  eventTeams_base_path ='https://www.mikeportfolio.se/api/Teams/GetTeamsByEventID/?id=';

  scoresByTeam_base_path =' https://www.mikeportfolio.se/api/Points/GetSummary/?id=';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } 
    if(error.error.status == 400){
      this.msg.errormessage = 'Det hittades inte'
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  createItem(item): Observable<Event> {
    return this.http
      .post<Event>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getEventByID(id): Observable<Event> {
    return this.http
      .get<Event>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getEvents(): Observable<Event> {
    return this.http
      .get<Event>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAdminEvents(id): Observable<Event> {
    return this.http
      .get<Event>(this.adminEvents_base_path  + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getContestantEvents(eventID, userID): Observable<Event> {
    return this.http
      .get<Event>(this.contestantEvents_base_path + eventID  + '/' + userID)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }



  // Update item by id
  updateEvent(id, item): Observable<Event> {
    return this.http
      .put<Event>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Event>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Not used anymore. Login and validation is with Okta plugin instead.
  login(item): Observable<ContestantAccount> {
    return this.http
      .post<ContestantAccount>(this.login_base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)   
      )
  }

  //Game by ID
  getGame(id): Observable<Game> {
    return this.http
      .get<Game>(this.games_base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAllGames(): Observable<Game> {
    return this.http
      .get<Game>(this.games_base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  getGamesByEventID(id): Observable<Game> {
    return this.http
      .get<Game>(this.eventGames_base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getGameByID(id): Observable<Game> {
    return this.http
      .get<Game>(this.games_base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  createGame(item): Observable<Game> {
    return this.http
      .post<Game>(this.games_base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getUserByID(id): Observable<Contestant> {
    return this.http
      .get<Contestant>(this.contestants_base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateUser(id, item): Observable<Contestant> {
    return this.http
      .put<Contestant>(this.contestants_base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  createUser(item): Observable<Contestant> {
    return this.http
      .post<Contestant>(this.contestants_base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getUserByEmail(email): Observable<Contestant> {
    return this.http
      .get<Contestant>(this.users_base_path + email)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAllTeams(): Observable<Team> {
    return this.http
      .get<Team>(this.teams_base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTeamsByEventID(id): Observable<Team> {
    return this.http
      .get<Team>(this.eventTeams_base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }



  createTeam(item): Observable<Team> {
    return this.http
      .post<Team>(this.teams_base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  deleteTeam(id) {
    return this.http
      .delete<Team>(this.teams_base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  SetPoints(item): Observable<Points> {
    return this.http
      .post<Points>(this.points_base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getScoreByGame(id): Observable<Points> {
    return this.http
      .get<Points>(this.points_base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getEventScores(id): Observable<Points> {
    return this.http
      .get<Points>(this.eventscores_base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTeamScores(id): Observable<Team> {
    return this.http
      .get<Team>(this.scoresByTeam_base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
