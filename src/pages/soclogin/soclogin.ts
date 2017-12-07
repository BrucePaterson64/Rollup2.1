import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CardPage } from '../card/card'; 
import { CoursesPage } from '../courses/courses'; 
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-soclogin',
  templateUrl: 'soclogin.html',
})
export class SocloginPage {
  loading: Loading;
  socRegisterCredentials = { email: '', password: '' };
 
  constructor(public navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public storage: Storage) { 

  }
 
  soclogin() {
    this.showLoading()
   
    console.log( this.socRegisterCredentials);
    this.auth.soclogin(this.socRegisterCredentials).subscribe(allowed => {
    console.log(this.socRegisterCredentials);
      if (allowed) {
console.log("ALLOWED");
       //this.navCtrl.setRoot('SocCardPage');
      } else {
      this.showError("Access Denied");
      }
    },
      error => {
      this.showError(error);
      });
  };
  
  public socCreateAccount() {
  this.navCtrl.push('SocRegisterPage');
  };

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait ...',
      dismissOnPageChange: true,
      duration: 2000
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