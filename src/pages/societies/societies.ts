import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import { EditCoursePage } from '../edit-course/edit-course';
@IonicPage()
@Component({
  selector: 'page-societies',
  templateUrl: 'societies.html',
})
export class SocietiesPage {

	public course: any;
	society : any ;
	//toggleStatus: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, public storage : Storage) {
 this.loadCourses();
    }

loadCourses() {
	//this.toggleStatus=false;

     this.dataService.loadCourseRU()
     .then(dataC => {
     this.course = dataC;
     console.log(this.course);
    });
  }
editCourse(d) {
  this.navCtrl.push(EditCoursePage, {
  course: d
  
});

}
//updateItem(d) {
//console.log(d);
//this.navCtrl.push(CardPage, {
//  name: (d)
//})
//}
  ionViewDidLoad() {
   

	 }  

}
