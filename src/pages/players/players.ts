import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
//import { AuthService } from '../../providers/auth-service/auth-service';
import {Http, Headers} from '@angular/http';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {DelPlayerPage} from '../del-player/del-player';
import {EditPlayerPage} from '../edit-player/edit-player';
import {AddPlayerPage} from '../add-player/add-player';
@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  public player: any;
	name : string;
	email : string;
	society : string;
	password : string;
	data1 : any;
	
  constructor( public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http, public dataService: DataServiceProvider) {
	
    this.loadPlayers();

  	this.storage.get('password').then((password) => {
        });

    this.storage.get('email').then((email) => {
    
		});
	      }
          
          
doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
   this.dataService.reload()
      .then(data1 => {
      this.player = data1;
    });
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  
  
     loadPlayers(){
     this.dataService.load()
      .then(data1 => {
      this.player = data1;
    });
  }

removePlayer(person) {
  this.navCtrl.push(DelPlayerPage, {
  name: person
})

}

editPlayer(person) {
  this.navCtrl.push(EditPlayerPage, {
  name: person
  
});

}
addPlayer() {
this.navCtrl.push(AddPlayerPage);

}

ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }

}
