import { Component } from '@angular/core';
import { IonicPage,  NavParams, NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import { OnInit } from '@angular/core';
import {LeaderPage} from '../leader/leader';
import { MenuController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
society: any;
S: any;
win1:any;
winner1:any;
win2:any;
winner2:any;
rd1:any;
selNoOfCourses: any;
ww2:any;
constructor(public navParams: NavParams, public http: Http, public storage: Storage, public nav: NavController, public menuCtrl: MenuController) {

 //this.society = navParams.get("society");

  
  }
 ngOnInit() {
  this.storage.get('society').then((society) => {
  this.society = society;
  console.log(society);
   
 this.http.get('http://golf-rollup.co.uk/society/socWeeksResults.php?Club=' + this.society,"")
	.map(data => data.json())
    .subscribe(data => {
    this.S = (data);
    console.log(this.S);
    
    this.http.get('http://golf-rollup.co.uk/society/socWinners.php?Club=' + this.society,"")
    
	.map(res => res.json())
    .subscribe(data => {
    this.win1 = data;
    let w1 = this.win1.Rd1;    
    console.log(data);
    console.log(this.win1.Rd1);
    
   
    
    this.http.get('http://golf-rollup.co.uk/society/noOfCourses.php?Club=' + this.society,"")
    .map(data => data.json())
    .subscribe(data => {
    var num = (data);
    this.selNoOfCourses = num;
    console.log(this.selNoOfCourses);
    })
   })
   })
   })
   
 
   
  }
  
  public leaderBoard() {

  this.nav.setRoot(LeaderPage,{society: this.society});
  }
  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }

}
