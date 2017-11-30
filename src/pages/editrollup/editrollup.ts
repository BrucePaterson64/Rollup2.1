import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {Http, Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-editrollup',
  templateUrl: 'editrollup.html',
})
export class EditrollupPage {
    course; time; day;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, public http : Http) {
  this.loadCourses();
  this.loadD();
  this.loadT();
  }
  
     loadCourses(){
     this.dataService.loadCourseRU()
      .then(data => {
      this.course = data;
    });
  }
  loadD(){
     this.day = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  }
  loadT(){
    
  this.http.get('http://golf-rollup.co.uk/aAppTimes.php', "")
      .map(res => res.json())
    .subscribe(data => {
    this.time = data;
     console.log(this.time);
  })  

}
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditrollupPage');
  }

}
