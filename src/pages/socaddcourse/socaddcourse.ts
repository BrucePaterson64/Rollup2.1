import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocietiesPage } from '../societies/societies';
import {Http, Headers} from '@angular/http';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-socaddcourse',
  templateUrl: 'socaddcourse.html',
})
export class SocaddcoursePage {

NewCourse; NewCourseTown; j1; j2; j3; j4; j5; j6; j7; j8; j9; j10; j11; j12; j13; j14; j15; j16; j17; j18; h1; h2; h3; h4; h5; h6; h7; h8; h9; h10; h11; h12; h13; h14; h15; h16; h17; h18; par; p;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public menuCtrl: MenuController) {
  this.j1=0;this.j2=0;this.j3=0;this.j4=0;this.j5=0;this.j6=0;this.j7=0;this.j8=0;this.j9=0;this.j10=0;this.j11=0;this.j12=0;this.j13=0;this.j14=0;this.j15=0;this.j16=0;this.j17=0;this.j18=0;this.h1=0;this.h2=0;this.h3=0;this.h4=0;this.h5=0;this.h6=0;this.h7=0;this.h8=0;this.h9=0;this.h10=0;this.h11=0;this.h12=0;this.h13=0;this.h14=0;this.h15=0;this.h16=0;this.h17=0;this.h18=0;
  }
  
  addPar() {
  
  this.p = [this.h1 + this.h2+ this.h3+ this.h4+ this.h5+ this.h6+ this.h7+ this.h8+ this.h9+ this.h10+ this.h11+ this.h12+ this.h13+ this.h14+ this.h15+ this.h16+ this.h17+ this.h18] ;
  this.par = +[this.p] || 0;
  console.log(this.par);
  }
  
  subCourse() {
  
this.http.get('http://golf-rollup.co.uk/aAppInsert.php?course='+this.NewCourse+'&town='+this.NewCourseTown+'&j1='+this.j1+'&j2='+this.j2+'&j3='+this.j3+'&j4='+this.j4+'&j5='+this.j5+'&j6='+this.j6+'&j7='+this.j7+'&j8='+this.j8+'&j9='+this.j9+'&j10='+this.j10+'&j11='+this.j11+'&j12='+this.j12+'&j13='+this.j13+'&j14='+this.j14+'&j15='+this.j15+'&j16='+this.j16+'&j17='+this.j17+'&j18='+this.j18+'&h1='+this.h1+'&h2='+this.h2+'&h3='+this.h3+'&h4='+this.h4+'&h5='+this.h5+'&h6='+this.h6+'&h7='+this.h7+'&h8='+this.h8+'&h9='+this.h9+'&h10='+this.h10+'&h11='+this.h11+'&h12='+this.h12+'&h13='+this.h13+'&h14='+this.h14+'&h15='+this.h15+'&h16='+this.h16+'&h17='+this.h17+'&h18='+this.h18, "")
    .subscribe(data => {
    console.log("success");
   });
   this.navCtrl.push(SocietiesPage);
    }
  
  ionViewDidLoad() {
  this.menuCtrl.enable(true, 'menu2');
  this.menuCtrl.enable(false, 'menu1');
  
  }

}
