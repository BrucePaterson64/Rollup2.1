import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';
import { CoursesPage } from '../pages/courses/courses';
import { PlayersPage } from '../pages/players/players';
import { ResultsPage } from '../pages/results/results';
import { SocresultsPage } from '../pages/socresults/socresults';
import { GpsPage } from '../pages/gps/gps';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage} from '../pages/register/register';
import { SocsettingsPage } from '../pages/socsettings/socsettings';
import { AddSocietyPage } from '../pages/add-society/add-society';
import {LeaderPage} from '../pages/leader/leader';
import {SocCardPage } from '../pages/soc-card/soc-card';
import {SocloginPage } from '../pages/soclogin/soclogin';
import {SocplayersPage} from '../pages/socplayers/socplayers';
//import * as moment from 'moment/moment';
import { SocietiesPage } from '../pages/societies/societies';
import { RollupPage } from '../pages/rollup/rollup';



@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;
  pages2: Array<{title: string, component: any}>;
  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private keyboard: Keyboard) {
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
  this.pages2 = [
      { title: 'Home', component: HomePage },
      { title: 'Courses', component: SocietiesPage },
      { title: 'GPS Yardage', component: GpsPage },
      { title: 'Players', component: SocplayersPage },
      { title: 'Results', component: SocresultsPage },
      { title: 'Roll Ups', component: RollupPage },
      { title: 'Score Card', component: SocCardPage },
      { title: 'LogIn', component: SocloginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      this.keyboard.hideKeyboardAccessoryBar(false);
     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
