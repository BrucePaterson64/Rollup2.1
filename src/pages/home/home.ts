import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SocloginPage } from '../soclogin/soclogin';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  logEvent() {

  this.navCtrl.push(LoginPage)
  }
  
  RUlogEvent() {
  
  this.navCtrl.push(SocloginPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
