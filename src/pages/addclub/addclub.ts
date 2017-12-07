import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addclub',
  templateUrl: 'addclub.html',
})
export class AddclubPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}
