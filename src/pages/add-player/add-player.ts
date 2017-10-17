import { IonicPage, Nav,  NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {AddSocietyPage} from '../add-society/add-society';
import { Component, ViewChild } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-add-player',
  templateUrl: 'add-player.html',
})
export class AddPlayerPage {
public name;
  society : any;
  selected = {Hcp:'', name : '', Society : ''}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {

  this.http.get('http://golf-rollup.co.uk/society/societies.php', "")
   .map(response => response.json())
    .subscribe(data => {
    this.society = data;
   console.log(this.society);
  
   });

  }

newSociety() {
	
	this.navCtrl.setRoot(AddSocietyPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlayerPage');
  }

}
