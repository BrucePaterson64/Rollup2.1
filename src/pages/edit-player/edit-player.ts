import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {PlayersPage} from '../players/players';

@IonicPage()
@Component({
  selector: 'page-edit-player',
  templateUrl: 'edit-player.html',
})
export class EditPlayerPage {
  public name;
  society : any;
  selected = {Hcp:'', revHcp : '', Society : ''}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

   this.name = navParams.get("name");
  this.http.get('http://golf-rollup.co.uk/society/societies.php', "")
   .map(response => response.json())
    .subscribe(data => {
    this.society = data;
   console.log(this.society);
  
   });
  };
  

  editPlayer(name) {
console.log(this.selected.Society);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
console.log(this.name.Society);
  this.http.get('http://golf-rollup.co.uk/society/appEditPlayer.php?Player='+this.name.Player + '&Club='+this.name.Society + '&Hcp='+this.selected.Hcp + '&RevHcp='+this.selected.revHcp)
  .subscribe(res => {
  console.log(res);
  this.navCtrl.push(PlayersPage);
})

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPlayerPage');
  }

}
