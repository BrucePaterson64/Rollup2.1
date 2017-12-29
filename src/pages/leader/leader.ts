import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
//import { OrderModule } from 'ngx-order-pipe';


@IonicPage()
@Component({
  selector: 'page-leader',
  templateUrl: 'leader.html',
})

export class LeaderPage {
	society: any;
	scores: any;
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public menuCtrl: MenuController) {
  this.society = navParams.get("society");
  }
ngOnInit() {

  		this.http.get('http://golf-rollup.co.uk/society/socLeader.php?Club=' + this.society, "")
		.map(data => data.json())
    .subscribe(data => {
    this.scores = (data);
   })
   }


  ionViewDidLoad() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
  }

}
