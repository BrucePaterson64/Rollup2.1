import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {AddPlayerPage} from '../add-player/add-player';

@IonicPage()
@Component({
  selector: 'page-add-society',
  templateUrl: 'add-society.html',
})
export class AddSocietyPage {
selected = {Society : '', Town : ''}
name : any;
town : any;
Society : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
this.Society = this.selected.Society;


  }
  addSociety() {
  console.log(this.selected);
 
 let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  this.http.get('http://golf-rollup.co.uk/society/appAddSociety.php?name='+this.selected.Society + '&town='+this.selected.Town)
  .subscribe(res => {
  this.navCtrl.setRoot(AddPlayerPage)
})
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSocietyPage');
  }

}
