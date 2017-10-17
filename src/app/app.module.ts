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
//import { NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import {IonicStorageModule} from '@ionic/storage';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AddSocietyPage } from '../pages/add-society/add-society';
import { ResultsServiceProvider } from '../providers/results-service/results-service';
import { CalcServiceProvider } from '../providers/calc-service/calc-service';
//import { ModalPage } from '../pages/modal/modal';
import {LeaderPage} from '../pages/leader/leader';


@NgModule({
  declarations: [
    MyApp,
    //CardPage,
    //CoursesPage,
    PlayersPage,
    ResultsPage,
    GpsPage,
    ListPage,
    LoginPage,
   // HomePage,
    RegistrationPage,
    DelPlayerPage,
    EditPlayerPage,
    SocsettingsPage,
    AddPlayerPage,
    AddSocietyPage,
    LeaderPage
   // ModalPage
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
    LeaderPage
    //ModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataServiceProvider,
    ResultsServiceProvider,
    CalcServiceProvider
  ]

})

export class AppModule {}