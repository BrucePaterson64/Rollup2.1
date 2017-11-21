import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { SocCardPage} from '../soc-card/soc-card';
@IonicPage()
@Component({
  selector: 'page-soc-home',
  templateUrl: 'soc-home.html',
})
export class SocHomePage {
    Club;
    Day;
    Time;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private storage: Storage) {
  
  storage.get('club').then((val) => {
  this.Club = val;
    });
  storage.get('day').then((val) => {
  this.Day = val;
    });
  storage.get('time').then((val) => {
  this.Time = val;
    });
    
  }
  
  card() {
  this.navCtrl.setRoot(SocCardPage);
  }
  
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}
