import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { SocCardPage} from '../soc-card/soc-card';
@IonicPage()
@Component({
  selector: 'page-sochome2',
  templateUrl: 'sochome2.html',
})
export class Sochome2Page {
    Club; Day; Time; public name; namec; namet; named;
    
  
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private storage: Storage) {
  
 
  
  this.namec = this.navParams.get("namec");
  this.namet = this.navParams.get("namet");
  this.named = this.navParams.get("named");
  console.log(this.namet);
  this.Club = this.namec;
  this.Time = this.namet;
  this.Day = this.named;
  
  this.storage.set('club', this.namec).then(() => {
        
  this.storage.set('time', this.namet).then(() => {
         
  this.storage.set('day', this.named).then(() => {
         }); 
         });
         });
  
       
  }
  
  card() {
  this.navCtrl.setRoot(SocCardPage);
  }
 

  ionViewDidLoad() {
  
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
    

  }

}

