import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the SocCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soc-card',
  templateUrl: 'soc-card.html',
})
export class SocCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
      this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}
