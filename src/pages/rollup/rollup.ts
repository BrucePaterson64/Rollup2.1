import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import {SocHomePage } from '../soc-home/soc-home'; 
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
this.navCtrl.setRoot(SocHomePage, {
  namec: p.Club,
  namet : p.Time,
  named : p.Day
})


}
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
  }
 
}