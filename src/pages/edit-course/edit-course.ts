import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-edit-course',
  templateUrl: 'edit-course.html',
})
export class EditCoursePage {
    course; c; Par;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   this.course = navParams.get("course");
   
   this.http.get('http://golf-rollup.co.uk/aAppCourses.php?Club='+this.course.Club,"")
   .map(response => response.json())
    .subscribe(data => {
    this.c = data;
   
   console.log(this.c);
  
   });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCoursePage');
  }

}
