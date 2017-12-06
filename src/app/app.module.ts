import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { CardPage } from '../pages/card/card';
import { CoursesPage } from '../pages/courses/courses';
import { PlayersPage } from '../pages/players/players';
import { ResultsPage } from '../pages/results/results';
import { RegisterPage } from '../pages/register/register';
import { DelPlayerPage } from '../pages/del-player/del-player';
import { AddPlayerPage } from '../pages/add-player/add-player';
import { EditPlayerPage } from '../pages/edit-player/edit-player';
import { RegistrationPage } from '../pages/registration/registration';
import { GpsPage } from '../pages/gps/gps';
import { SocsettingsPage } from '../pages/socsettings/socsettings';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { HomePageModule } from '../pages/home/home.module';
import { CardPageModule } from '../pages/card/card.module';
import { CoursesPageModule } from '../pages/courses/courses.module';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { MyApp } from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AddSocietyPage } from '../pages/add-society/add-society';
import { ResultsServiceProvider } from '../providers/results-service/results-service';
import { CalcServiceProvider } from '../providers/calc-service/calc-service';
import {LeaderPage} from '../pages/leader/leader';
import { Geolocation } from '@ionic-native/geolocation';
import {SocloginPage} from '../pages/soclogin/soclogin';
import {SocRegisterPage} from '../pages/soc-register/soc-register';
import {SocRegistrationPage} from '../pages/soc-registration/soc-registration';
import {SocHomePage} from '../pages/soc-home/soc-home';
import {SocCardPage} from '../pages/soc-card/soc-card';
import {SocplayersPage} from '../pages/socplayers/socplayers';
import {SocAddPlayerPage} from '../pages/soc-add-player/soc-add-player';
import {SocDelPlayerPage} from '../pages/soc-del-player/soc-del-player';
import {SocEditPlayerPage} from '../pages/soc-edit-player/soc-edit-player';
import { SocietiesPage } from '../pages/societies/societies';
import { EditCoursePage } from '../pages/edit-course/edit-course';
import { RollupPage } from '../pages/rollup/rollup';
import { EditrollupPage } from '../pages/editrollup/editrollup';
import { DelrollupPage } from '../pages/delrollup/delrollup';
import {Sochome2Page} from '../pages/sochome2/sochome2';
import { SocresultsPage } from '../pages/socresults/socresults';
import { SocLeaderBoardPage } from '../pages/soc-leader-board/soc-leader-board';
import { AddCoursePage } from '../pages/add-course/add-course';
import { SocaddcoursePage } from '../pages/socaddcourse/socaddcourse';
import { Keyboard } from '@ionic-native/keyboard';
@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    ResultsPage,
    GpsPage,
    ListPage,
    LoginPage,
    RegistrationPage,
    DelPlayerPage,
    EditPlayerPage,
    SocsettingsPage,
    AddPlayerPage,
    AddSocietyPage,
    SocloginPage,
    LeaderPage,
    SocHomePage,
    SocRegistrationPage,
    SocCardPage,
    SocplayersPage,
    SocAddPlayerPage,
    SocDelPlayerPage,
    SocEditPlayerPage,
    SocietiesPage,
    EditCoursePage,
    RollupPage,
    EditrollupPage,
    DelrollupPage,
    Sochome2Page,
    SocresultsPage,
    SocLeaderBoardPage,
    AddCoursePage,
    SocaddcoursePage
    
     ],
     
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    CardPageModule,
    CoursesPageModule,
    OrderModule,
    
    IonicStorageModule.forRoot()
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardPage,
    CoursesPage,
    PlayersPage,
    ResultsPage,
    GpsPage,
    ListPage,
    LoginPage,
    HomePage,
    RegistrationPage,
    DelPlayerPage,
    EditPlayerPage,
    SocsettingsPage,
    AddPlayerPage,
    AddSocietyPage,
    LeaderPage,
    SocloginPage,
    SocHomePage,
    SocRegistrationPage,
    SocCardPage,
    SocplayersPage,
    SocAddPlayerPage,
    SocDelPlayerPage,
    SocEditPlayerPage,
    SocietiesPage,
    EditCoursePage,
    RollupPage,
    EditrollupPage,
    DelrollupPage,
    Sochome2Page,
    SocresultsPage,
    SocLeaderBoardPage,
    AddCoursePage,
    SocaddcoursePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataServiceProvider,
    ResultsServiceProvider,
    CalcServiceProvider,
    Keyboard
    

  ]

})

export class AppModule {}