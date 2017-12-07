import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
//import { AuthService } from '../../providers/auth-service/auth-service';
import {Http, Headers} from '@angular/http';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {DelPlayerPage} from '../del-player/del-player';
import {EditPlayerPage} from '../edit-player/edit-player';
import {AddPlayerPage} from '../add-player/add-player';
import { MenuController } from 'ionic-angular';
import {SocEditPlayerPage} from '../soc-edit-player/soc-edit-player';
import {SocAddPlayerPage} from '../soc-add-player/soc-add-player';
import {SocDelPlayerPage} from '../soc-del-player/soc-del-player';

@IonicPage()
@Component({
  selector: 'page-socplayers',
  templateUrl: 'socplayers.html',
})
export class SocplayersPage {

  public player: any;
	name : string;
	email : string;
	society : string;
	password : string;
	data1 : any;
    day: any;
    time: any;
	
  constructor( public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http, public dataService: DataServiceProvider, public menuCtrl: MenuController) {
	this.loadPlayers();
    

  	this.storage.get('day').then((day) => {
    this.day = day;
        });

    this.storage.get('time').then((time) => {
    this.time = time;
		});
	      }
          
          
doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
   this.dataService.reloadru()
      .then(data1 => {
      this.player = data1;
    });
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  
     loadPlayers(){
     this.dataService.loadru()
      .then(data1 => {
      this.player = data1;
    });
  }

removePlayer(person) {
  this.navCtrl.push(SocDelPlayerPage, {
  name: person
})

}

editPlayer(person) {
  this.navCtrl.push(SocEditPlayerPage, {
  name: person
  
});

}
addPlayer() {
this.navCtrl.push(SocAddPlayerPage);

}

ionViewDidLoad() {
    this.loadPlayers();
     this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }

}
