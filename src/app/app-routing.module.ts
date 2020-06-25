import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'implicit/callback', loadChildren: './auth/implicit/auth-callback/auth-callback.module#AuthCallbackPageModule' },
  { path: 'implicit/logout', loadChildren: './auth/implicit/end-session/end-session.module#EndSessionPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    //:id läggs till efter event-edit eftersom vi bara vill gå till den sidan med ett ID
    path: 'event-edit/:id',
    loadChildren: () => import('./event-edit/event-edit.module').then( m => m.EventEditPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'scoreboard/:eventID',
    loadChildren: () => import('./scoreboard/scoreboard.module').then( m => m.ScoreboardPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'game-create/:id',
    loadChildren: () => import('./game-create/game-create.module').then( m => m.GameCreatePageModule)
  },
  {
    path: 'game-list/:id',
    loadChildren: () => import('./game-list/game-list.module').then( m => m.GameListPageModule)
  },
  {
    path: 'event-teams/:id',
    loadChildren: () => import('./event-teams/event-teams.module').then( m => m.EventTeamsPageModule)
  },
  {
    path: 'event-team-details',
    loadChildren: () => import('./event-team-details/event-team-details.module').then( m => m.EventTeamDetailsPageModule)
  },
  {
    path: 'event-team-create/:id',
    loadChildren: () => import('./event-team-create/event-team-create.module').then( m => m.EventTeamCreatePageModule)
  },
  {
    path: 'game-setpoints/:id/:eventID',
    loadChildren: () => import('./game-setpoints/game-setpoints.module').then( m => m.GameSetpointsPageModule)
  },
  {
    path: 'game-scoreboard/:id',
    loadChildren: () => import('./game-scoreboard/game-scoreboard.module').then( m => m.GameScoreboardPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'profile-edit/:id',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
