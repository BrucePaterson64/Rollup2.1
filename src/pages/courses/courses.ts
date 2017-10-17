import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {CardPage} from '../card/card';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
	public course: any;
	society : any ;
	//toggleStatus: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, public storage : Storage) {
 
   
  
  this.storage.get('society').then((society) => {
    this.society = society;
    console.log(society);
            this.socCourses();
     })
  }

onInit () {
	//this.toggleStatus=false;
}
    socCourses() {
     this.dataService.loadCourses()
     .then(data => {
     this.course = data;
     console.log(this.course);
    });
  }

updateItem(d) {
console.log(d);
this.navCtrl.push(CardPage, {
  name: (d)
})
}
  ionViewDidLoad() {
   

	 }  

}