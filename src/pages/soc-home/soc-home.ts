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
    Club; Day; Time; public name; namec; namet; named;
    
  
    
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
    onPageWillEnter(){
  
  this.namec = this.navParams.get("namec");
  this.namet = this.navParams.get("namet");
  this.named = this.navParams.get("named");
  
  this.storage.set('club', this.namec).then(() => {
         }); 
  this.storage.set('time', this.namet).then(() => {
          });
  this.storage.set('day', this.named).then(() => {
         }); 
        
  
  }
  ionViewDidLoad() {
  this.onPageWillEnter();
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
    

  }

}
