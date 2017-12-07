import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { PlayersPage } from '../players/players';
import { MenuController } from 'ionic-angular';
import { SocplayersPage } from '../socplayers/socplayers';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-soc-edit-player',
  templateUrl: 'soc-edit-player.html',
})
export class SocEditPlayerPage {

  public name; day; time; club; data; Hcp; Club; RevHcp; 
  selected = {Hcp:'', revHcp : '', club : '', Day : '', Time : ''}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public menuCtrl: MenuController, private storage: Storage) {
    this.name = navParams.get("name");
   
    this.storage.get('day').then((day) => {
    this.selected.Day = day;
        });

    this.storage.get('time').then((time) => {
    
    this.selected.Time = time;
		});
 
    this.storage.get('club').then((club) => {
    this.club = club;
    console.log(this.club);
		
    this.http.get('http://golf-rollup.co.uk/AppPlayers.php?Club='+this.club+'&Player='+this.name.Player, "")
    	.map(res => res.json())
		.subscribe(data => {
		this.data = data[0];
        this.selected.Hcp = this.data.Hcp;
		this.selected.revHcp = this.data.RevHcp;
        this.Club = this.data.Club;
	
 	 });   
    });    
  };
  

editPlayer(name) {
console.log(name);
 this.http.get('http://golf-rollup.co.uk/appEditPlayer.php?Player='+this.name.Player + '&Club='+this.club + '&DayS='+this.selected.Day + '&TeeTime='+this.selected.Time + '&Hcp='+this.selected.Hcp + '&RevHcp='+this.selected.revHcp)
  .subscribe(res => {
  this.navCtrl.setRoot(SocplayersPage);
})

}

  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}

