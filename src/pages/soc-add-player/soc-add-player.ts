import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { SocplayersPage } from '../socplayers/socplayers';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-soc-add-player',
  templateUrl: 'soc-add-player.html',
})
export class SocAddPlayerPage {

 public name; club; time; day; data; Club; Hcp; RevHcp;
  
  selected = {Hcp:'', Player : '', Club : '', Time : '', Day : ''};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public menuCtrl: MenuController, private storage: Storage) {
    this.storage.get('day').then((day) => {
    this.day = day;
        });

    this.storage.get('time').then((time) => {
    this.time = time;
		});
    this.storage.get('club').then((club) => {
    this.club = club;
    console.log(this.club);
		
     
    });    
  };
addPlayer(selected){
 this.http.get('http://golf-rollup.co.uk/aAppAddPlayer.php?Player='+selected.Player+'&Club='+this.club+'&Hcp='+selected.Hcp+'&TeeTime='+this.time+'&DayS='+this.day, "")
   .map(response => response.json())
    .subscribe(data => {
      console.log("success");
   });
this.navCtrl.setRoot(SocplayersPage);
}


newSociety() {
	
	//this.navCtrl.setRoot(AddSocietyPage);
}


  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}
