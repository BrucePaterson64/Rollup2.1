import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { SocietiesPage } from '../societies/societies';
@IonicPage()
@Component({
  selector: 'page-edit-course',
  templateUrl: 'edit-course.html',
})
export class EditCoursePage {
 
  course; c; Par; c1; par; Index;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
   this.course = navParams.get("course");
   
   this.http.get('http://golf-rollup.co.uk/aAppCourses.php?Club='+this.course.Club,"")
   .map(response => response.json())
    .subscribe(data => {
    this.c = data;
   
   console.log(this.c);
  
   });
   
  }
submitChanges() {
  
this.http.get('http://golf-rollup.co.uk/aAppUpdateCourse.php?course='+this.course.Club+'&j1='+this.c[0].Index+'&j2='+this.c[1].Index+'&j3='+this.c[2].Index+'&j4='+this.c[3].Index+'&j5='+this.c[4].Index+'&j6='+this.c[5].Index+'&j7='+this.c[6].Index+'&j8='+this.c[7].Index+'&j9='+this.c[8].Index+'&j10='+this.c[9].Index+'&j11='+this.c[10].Index+'&j12='+this.c[11].Index+'&j13='+this.c[12].Index+'&j14='+this.c[13].Index+'&j15='+this.c[14].Index+'&j16='+this.c[15].Index+'&j17='+this.c[16].Index+'&j18='+this.c[17].Index+'&h1='+this.c[0].Par+'&h2='+this.c[1].Par+'&h3='+this.c[2].Par+'&h4='+this.c[3].Par+'&h5='+this.c[4].Par+'&h6='+this.c[5].Par+'&h7='+this.c[6].Par+'&h8='+this.c[7].Par+'&h9='+this.c[8].Par+'&h10='+this.c[9].Par+'&h11='+this.c[10].Par+'&h12='+this.c[11].Par+'&h13='+this.c[12].Par+'&h14='+this.c[13].Par+'&h15='+this.c[14].Par+'&h16='+this.c[15].Par+'&h17='+this.c[16].Par+'&h18='+this.c[17].Par, "")
    .subscribe(data => {
    console.log("success");
   });
   this.navCtrl.setRoot(SocietiesPage);
    }
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCoursePage');
  }

}
