import { Component } from '@angular/core';
import { IonicPage,  NavParams, NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import { OnInit } from '@angular/core';
import {LeaderPage} from '../leader/leader';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
society: any;
S: any;

selNoOfCourses: any;

constructor(public navParams: NavParams, public http: Http, public storage: Storage, public nav: NavController) {

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

    this.http.get('http://golf-rollup.co.uk/society/noOfCourses.php?Club=' + this.society,"")
    .map(data => data.json())
    .subscribe(data => {
    var num = (data);
    this.selNoOfCourses = num;
    console.log(this.selNoOfCourses);
    })
   })
   })
  }
  
  public leaderBoard() {

  this.nav.push(LeaderPage,{society: this.society});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
