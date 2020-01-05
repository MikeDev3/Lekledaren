import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', //redirect to 'login' för att ha det som startsida
    pathMatch: 'full'
  },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'createevent',
    loadChildren: () => import('./pages/createevent/createevent.module').then( m => m.CreateeventPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'datepicker',
    loadChildren: () => import('./pages/datepicker/datepicker.module').then( m => m.DatepickerPageModule)
  },
  {
    path: 'addevent',
    loadChildren: () => import('./pages/addevent/addevent.module').then( m => m.AddeventPageModule)
  },
  {
    path: 'myevents',
    loadChildren: () => import('./pages/myevents/myevents.module').then( m => m.MyeventsPageModule)
  },
  {
    path: 'jsonusers',
    loadChildren: () => import('./pages/jsonusers/jsonusers.module').then( m => m.JsonusersPageModule)
  },
  
  {
    path: 'create',
    loadChildren: () => import('./event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'event-edit',
    loadChildren: () => import('./event-edit/event-edit.module').then( m => m.EventEditPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'event-detail',
    loadChildren: () => import('./event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
