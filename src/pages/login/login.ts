import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CardPage } from '../card/card'; 
import { CoursesPage } from '../courses/courses'; 
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(public navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public storage: Storage) { 

  }
 
  public login() {
    this.showLoading()
   
    console.log( this.registerCredentials);
    this.auth.login(this.registerCredentials).subscribe(allowed => {
    console.log(this.registerCredentials);
      if (allowed) {

       //this.navCtrl.setRoot('CoursesPage');
      } else {
      this.showError("Access Denied");
      }
    },
      error => {
      this.showError(error);
      });
  };
  public createAccount() {
    this.navCtrl.push('RegisterPage');
  };

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
      
    });
  this.loading.present();
  };
 
  showError(text) {
  //  this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  };
}