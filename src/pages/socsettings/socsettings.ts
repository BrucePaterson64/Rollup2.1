import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {Storage} from '@ionic/storage';
import { Http } from '@angular/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CoursesPage } from '../courses/courses';
import { AddCoursePage } from '../add-course/add-course';
@IonicPage()
@Component({
  selector: 'page-socsettings',
  templateUrl: 'socsettings.html',
})
export class SocsettingsPage {
set = { year:'', society: '', shots: '', adjHcp: '', selectedClub1:'', selectedClub2:'', selectedClub3:'', selectedClub4:'', selectedClub5:'', selectedClub6:''};

	public course: any;
	public years;
	description: string;
	society : string;
	shots = "";
	adjHcp = "";
  selNoOfCourses = "";
	NoOfCourses : any;
  constructor(public navCtrl: NavController,  public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataServiceProvider, public storage : Storage, public http : Http, private auth: AuthService) {
 
 this.set.shots = "0";
 this.set.adjHcp = "no";


 this.loadCourses();
 
  }
  
loadCourses() {
    
    this.dataService.loadCourse()
    .then(dataC => {
    this.course = dataC;
console.log(this.course);
  });
    }
addCourse() {
this.navCtrl.push(AddCoursePage)

}
  showAlert() {

 let alert = this.alertCtrl.create({
        title: 'Help',
        subTitle: '<b>Ajust Handicaps:</b> <br>Select "YES" for handicap amendment after each round (Handicap adjustments in line with CONGU). <BR><b>Penalty Shots:</b> <br>Select the number of penalty shots for the daily winner (Penalty shots will only apply to the following round!).<BR> <b>Courses to Play:</b><br> Please select the various courses to be played (If a course is not available please add it to the database)',
        buttons: ['Close']
    });
    alert.present();
  }

 public subSettings() {
  this.storage.set('course', this.set.selectedClub1).then(() => {
          
    console.log(this.set.selectedClub1);
          }); 
     this.selNoOfCourses = this.NoOfCourses;
     
     console.log(this.selNoOfCourses);

    this.auth.setting(this.set).subscribe(allowed => {
    console.log(this.set);
      if (allowed) {

       this.navCtrl.setRoot('CoursesPage');
      } else {
      
      }
    },
      error => {
      
      });
  };
  



 
    

  ionViewDidLoad() {
   
    this.years = [
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
       ];

   this.storage.get('society').then((society) => {
    this.set.society = society;

  }) 
  
console.log(this.adjHcp);
}
}