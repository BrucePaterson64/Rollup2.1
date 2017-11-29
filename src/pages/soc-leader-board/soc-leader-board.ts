
import { Component } from '@angular/core';
import { IonicPage,  NavParams, NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import { OnInit } from '@angular/core';

import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-soc-leader-board',
  templateUrl: 'soc-leader-board.html',
})
export class SocLeaderBoardPage {

player; time; day; Club; S; myYear; myWeek; week; ddate; maxdate; Maxdate; scores;

constructor(public navParams: NavParams, public http: Http, public storage: Storage, public nav: NavController) {

 //this.society = navParams.get("society");

  
  
 
   this.storage.get('day').then((val) => {
   this.day = val;
 
  this.storage.get('time').then((val) => {
   this.time = val;
 
  this.storage.get('club').then((val) => {
   this.Club = val;
  
  this.storage.get('name').then((val) => {
   this.player = val;


	var myYear = moment().year();
    var myWeek = moment().week();
    var week = (myYear +''+ myWeek);
    this.ddate = myWeek;
    
    this.http.get('http://golf-rollup.co.uk/aAppMaxDate.php?Club='+this.Club+'&DayS='+this.day+'&TeeTime='+this.time, "")
        .map(res => res.json())
        .subscribe(res => {
        this.maxdate = res;
        this.storage.set('maxdate', this.maxdate).then(() => {
         }); 
		
		this.storage.get('maxdate').then((val) => {
        this.Maxdate = val;
        
        
         this.http.get('http://golf-rollup.co.uk/aAppResults.php?Club='+this.Club+'&DayS='+this.day+'&TeeTime='+this.time+'&Week='+this.Maxdate, "")
        .map(res => res.json())
        .subscribe(res => {
        this.scores = (res);
   
});
 });
});
});
});
});
});
   
 }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}

