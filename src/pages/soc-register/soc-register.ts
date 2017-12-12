import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { CardPage} from '../card/card'; 
import { AddtimePage} from '../addtime/addtime';
import { AddclubPage} from '../addclub/addclub';
import { Http } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-soc-register',
  templateUrl: 'soc-register.html',
})
export class SocRegisterPage {
  createSuccess = false;
  socRegisterCredentials = { email: '', password: '', name: '', club: '', day: '', time: '', hcp: '' };
 public course; time; days;
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, public http: Http) {
  
   }
 
  public socRegister() {

    this.auth.socRegister(this.socRegisterCredentials).subscribe(success => {
      if (success) {
      this.createSuccess = true;
      this.showPopup("Success", "Account created.");
        
      } else {
      this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
      this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
  
  ngOnInit() {
  
     this.http.get('http://golf-rollup.co.uk/aAppCourse.php',"")
    .map(response => response.json())
    .subscribe(data => {
    this.course = data;
   
      console.log(this.course);
   });
   this.http.get('http://golf-rollup.co.uk/aAppTimes.php',"")
    .map(response => response.json())
    .subscribe(data => {
    this.time = data;
   
      console.log(this.time);
   });
   this.days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  }
  addTime() {
  this.nav.push(AddtimePage);
  }
  addClub() {
  this.nav.push(AddclubPage);
  }
  resetClub() {
  console.log("RESET");
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
   this.ngOnInit()
      
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
}

