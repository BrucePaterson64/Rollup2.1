import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
/**
 * Generated class for the DelPlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-del-player',
  templateUrl: 'del-player.html',
})
export class DelPlayerPage {
    public name;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  
  this.name = navParams.get("name");
  
  };
  
  delPlayer(name) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
console.log(this.name.Society);
  this.http.get('http://golf-rollup.co.uk/society/appDelPlayer.php?Player='+this.name.Player + '&Club='+this.name.Society)
  .subscribe(res => {
  
})

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DelPlayerPage');
  }

}
