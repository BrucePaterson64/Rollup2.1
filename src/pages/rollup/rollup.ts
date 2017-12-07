import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import {Sochome2Page } from '../sochome2/sochome2'; 
import { EditrollupPage } from '../editrollup/editrollup';
@IonicPage()
@Component({
  selector: 'page-rollup',
  templateUrl: 'rollup.html',
})
export class RollupPage {
name; res; club; data; Club; namec; named; namet;


  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private storage: Storage, public http: Http) {
  this.loadData();
  storage.get('club').then((val) => {
  this.Club = val;
    });
  }
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
   this.loadData();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
loadData() {
this.storage.get('name').then((name) => {
this.name = name;
 
  
this.http.get('http://golf-rollup.co.uk/selectRollup.php?Player='+this.name, "")
        .map(res => res.json())
        .subscribe(res => {
        this.res = (res);
   
});
this.http.get('http://golf-rollup.co.uk/selectAllRollups.php?Player='+this.name, "")
        .map(data => data.json())
        .subscribe(data => {
        this.data = (data);
     console.log(this.data);
 
})
})
}
useRollup(p) {
this.navCtrl.setRoot(Sochome2Page, {
  namec: p.Club,
  namet : p.Time,
  named : p.Day
})
}
editRollup() {
this.navCtrl.push(EditrollupPage);
}

removeRollup() {
console.log("Removing");
}
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }
 
}