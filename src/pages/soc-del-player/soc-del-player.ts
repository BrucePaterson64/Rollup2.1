import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { SocplayersPage } from '../socplayers/socplayers';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-soc-del-player',
  templateUrl: 'soc-del-player.html',
})

export class SocDelPlayerPage {
    public name; Club; Hcp; day; time; club; data; RevHcp;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public menuCtrl: MenuController, private storage: Storage) {
  
  this.name = navParams.get("name");
  this.storage.get('day').then((day) => {
    this.day = day;
        });

    this.storage.get('time').then((time) => {
    this.time = time;
		});
    this.storage.get('club').then((club) => {
    this.club = club;
    console.log(this.club);
		
    this.http.get('http://golf-rollup.co.uk/AppPlayers.php?Club='+this.club+'&Player='+this.name.Player, "")
    	.map(res => res.json())
		.subscribe(data => {
		this.data = data[0];
        this.Hcp = this.data.Hcp;
		this.RevHcp = this.data.RevHcp;
        this.Club = this.data.Club;
	
 	 });   
    });    
  };
  
  delPlayer(name) {
  
  this.http.get('http://golf-rollup.co.uk/aAppDelPlayer.php?Player='+this.name.Player + '&Club='+this.Club+ '&Hcp=' + this.Hcp+ '&TeeTime=' + this.time+ '&DayS=' + this.day)
  .subscribe(res => {
  this.navCtrl.setRoot(SocplayersPage);
})

}
  ionViewDidLoad() {
     this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1')
  }

}