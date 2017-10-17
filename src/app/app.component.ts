import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';
import { CoursesPage } from '../pages/courses/courses';
import { PlayersPage } from '../pages/players/players';
import { ResultsPage } from '../pages/results/results';
import { GpsPage } from '../pages/gps/gps';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage} from '../pages/register/register';
import { SocsettingsPage } from '../pages/socsettings/socsettings';
import { AddSocietyPage } from '../pages/add-society/add-society';
import {LeaderPage} from '../pages/leader/leader';

import * as moment from 'moment/moment';
@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Score Card', component: CoursesPage },
      { title: 'Courses', component: CoursesPage },
      { title: 'Players', component: PlayersPage },
      { title: 'Results', component: ResultsPage },
      { title: 'GPS Yardage', component: GpsPage },
      { title: 'LogIn', component: LoginPage },
      { title: 'Settings', component: SocsettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
