import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { MenuController } from 'ionic-angular';
import { SocRegisterPage } from '../soc-register/soc-register';

@IonicPage()
@Component({
  selector: 'page-addtime',
  templateUrl: 'addtime.html',
})
export class AddtimePage {
    public hour; min; m; h;  selectedHour; selectedMin; selectedMins;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public http: Http) {
 
  }
  ngOnInit() {
  
  this.selectedHour = "00";
  this.selectedMin = "00";
  
 
  }
subTime() {
     this.h = this.selectedHour;
     this.m = this.selectedMin;
    var teetime = this.h +'.'+ this.m;
     
    this.http.get('http://golf-rollup.co.uk/addTeeTime.php?Time='+teetime, "")
    .subscribe(data => {
    console.log("success");
   });
   this.navCtrl.push(SocRegisterPage);
    
    }
  ionViewDidLoad() {
  
  
    this.menuCtrl.enable(true, 'menu2');
    this.menuCtrl.enable(false, 'menu1');
    this.hour = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
    
    this.min = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
    
   
  }

}
