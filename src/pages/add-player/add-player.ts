import { IonicPage, Nav,  NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {AddSocietyPage} from '../add-society/add-society';
import { Component, ViewChild } from '@angular/core';
import {PlayersPage} from '../players/players';

@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage {
public name;
  society : any;
  selected = {Hcp:'', Player : '', Club : ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  this.http.get('http://golf-rollup.co.uk/society/societies.php', "")
   .map(response => response.json())
    .subscribe(data => {
    this.society = data;
   console.log(this.society);
  
   });

  }
addPlayer(selected){
 this.http.get('http://golf-rollup.co.uk/society/appAddPlayer.php?Player='+selected.Player+'&Club='+selected.Club+'&Hcp='+selected.Hcp, "")
   .map(response => response.json())
    .subscribe(data => {
      console.log("success");
   });
this.navCtrl.setRoot(PlayersPage);
}


newSociety() {
	
	this.navCtrl.setRoot(AddSocietyPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayerPage');
  }

}
