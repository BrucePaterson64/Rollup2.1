
import { Component } from '@angular/core';
import { IonicPage,  NavParams, NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import { OnInit } from '@angular/core';
import {SocLeaderBoardPage} from '../soc-leader-board/soc-leader-board';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-socresults',
  templateUrl: 'socresults.html',
})
export class SocresultsPage {
player; time; day; Club; S; myYear; myWeek; week; ddate;

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
    var myWeek = moment().format('ww');
    var week = (myYear +''+ myWeek);
    this.ddate = myWeek;
    
    this.http.get('http://golf-rollup.co.uk/aAppWeeklyResults.php?Club='+this.Club+'&Day='+this.day+'&TeeTime='+this.time+'&yrwk='+week, "")
        .map(res => res.json())
        .subscribe(res => {
        this.S = (res);
   
});
});
});
});
});
   
 }
 doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    	var myYear = moment().year();
    var myWeek = moment().format('WW');
    var week = (myYear +''+ myWeek);
    this.ddate = myWeek;
   this.http.get('http://golf-rollup.co.uk/aAppWeeklyResults.php?Club='+this.Club+'&Day='+this.day+'&TeeTime='+this.time+'&yrwk='+week, "")
        .map(res => res.json())
        .subscribe(res => {
        this.S = (res);
   
});
     
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
  
  public leaderBoard() {

  this.nav.push(SocLeaderBoardPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad socResultsPage');
  }

}
