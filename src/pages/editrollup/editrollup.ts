import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {Http, Headers} from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-editrollup',
  templateUrl: 'editrollup.html',
})
export class EditrollupPage {
    course; time; day; 
    Club:any; 
    Time:string; 
    Day:any;
    selectedClub; selectedTime; selectedDay;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, public http : Http, public storage: Storage) {
  
  
  this.loadCourses();
  this.loadD();
  this.loadT();
  }
  
  ngOnInit() {
  this.storage.get('club').then((club) => {
  this.Club = club;
  this.selectedClub = this.Club;
    })
  this.storage.get('day').then((day) => {
  this.Day = day;
  this.selectedDay = this.Day;
    })
  this.storage.get('time').then((time) => {
  this.Time = time;
  this.selectedTime = this.Time;
    })
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
    
  })  

}
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditrollupPage');
  }

}
