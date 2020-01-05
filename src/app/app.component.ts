import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Startsidan',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Min profil',
      url: '/home',
      icon: 'person'
    },
    {
      title: 'Lista',
      url: '/list',
      icon: 'chatboxes'
    },
    {
      title: 'Skapa nytt',
      url: '/create',
      icon: 'list'
    },
    {
      title: 'Mina evenemang',
      url: '/event-list',
      icon: 'chatboxes'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
