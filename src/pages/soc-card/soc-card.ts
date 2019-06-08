 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import {DataServiceProvider} from '../../providers/data-service/data-service';
import {CoursesPage} from '../courses/courses';
import { ToastController, AlertController } from 'ionic-angular';
import {SocresultsPage} from '../socresults/socresults';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-soc-card',
  templateUrl: 'soc-card.html',
  providers: [DataServiceProvider]
})

export class SocCardPage {
  public name; rollup;
  public Course : any;
  public player: any;
  public Club : any;
  club;
  email : string;
  society : string;
  password : string;
  data : any;
  selectedPlayer : string;
  selectedHcp : any;
  selectedScore: any;
  alert : any;
  datePlayed : any;
  hcpdata : any;
  rt: any;
  pw : any;
  res: any;
  Hcp : any;
  hcp : any;
  H : any;
  Hh : any;
  hh : any;
  public items;
  selhcp : string;
  totalamount : any;
  Par : any;
  totPts : any;
  n: any;
  RrevHcp: any;
  day:any;
  time:any;
  newDate:any;
  m: string;
  yrwk;
  
  selected = { Hcp: '', Score: '' };
  
  constructor( public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http, public dataService: DataServiceProvider, public toastCtrl: ToastController,public alertCtrl: AlertController) {
  

    var d = new Date();
    this.n = d.toLocaleDateString('en-GB');
	 
   this.name = navParams.get("name");
   this.storage.get('day').then((val) => {
   this.day = val;
  });
  this.storage.get('time').then((val) => {
   this.time = val;
  });
  this.storage.get('club').then((val) => {
   this.Club = val;
  
    this.loadC();
    });
      
    this.loadPlayers();
 
       }
       
  onSelect1() {

  document.getElementById('sel1').style.cssText = 'background:#ffffff; color: #ff0000;';
  document.getElementById('sel11').style.cssText = 'background:#ffffff; color: #ff0000;';
  document.getElementById('sel2').style.cssText = 'background:#ffffff; color: #00000;';
  document.getElementById('sel22').style.cssText = 'background:#ffffff; color: #ffffff;';
  }
  onSelect2() {
  document.getElementById('sel1').style.cssText = 'background:#ffffff; color: #00000;';
  document.getElementById('sel11').style.cssText = 'background:#ffffff; color: #ffffff;';
  document.getElementById('sel2').style.cssText = 'background:#ffffff; color: #ff0000;';
  document.getElementById('sel22').style.cssText = 'background:#ffffff; color: #ff0000;';
  
  }

  onChange(selectedPlayer) {

  

   this.http.get('http://golf-rollup.co.uk/AHcp.php?Club='+this.Club +'&Player=' +selectedPlayer+'&Day='+this.day+'&Time='+this.time,"")
    .map(response => response.json())
    .subscribe(data => {
    this.H = data;
   
      console.log(this.H);
   });  
   

 

 this.showAlert();
}

showAlert() {

  const toast = this.toastCtrl.create({
    message: 'Please select HANDICAP!',
    duration: 2000,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
loadPlayers(){
     this.dataService.loadru()
      .then(data => {
      this.player = data;
      console.log(this.player);
    });
  }
loadC(){
    this.dataService.loadCru()
    .then(datard => {
    this.club = datard;
    console.log(datard);
    });
    }
    
getShots(par) {
    let val =  this.selectedHcp - par.Index;

    if (val > 17.4) {
      return 2;
    } else if (val >= -0.5) {
      return 1;
    } else if (val < -0.5) {
      return 0;
    }
     
  };

getTotalShots = function() {
   
if (!this.club) { return 0;
             }
    var total = 0;
   this.club.forEach((item, index) => {
    total += this.getShots(item) || 0
});
    return total;
    
      };

getScoreTotal = function () {
    if (!this.club)
      return 0;

    var total = 0;
    for (var i = 0; i < this.club.length; i++) {
      total += Number(this.club[i].sel) || 0;
      //this.totScore = total;
      
    }
    return total;

  };
getTotal = function () {
    if (!this.club) { return 0;
        }
    var total = 0;
    this.club.forEach((item, index) => {
      total += this.getPoints(item) || 0
      this.totPts = total;
    });
    return total;
  };

getPar = function () {
    if (!this.club) { return 0;
             }
    var total = 0;
    for (var i = 0; i < this.club.length; i++) {
      total += parseInt(this.club[i].Par);
    }
    return total;
  };

getPoints = function (par) {
    var shot = this.getShots(par), val = par.sel - shot - par.Par;

    if (shot === null) {
      return null;
    }

    if (val > 1) {
      return 0;
    } else if (val == 1) {
      return 1;
    } else if (val == 0) {
      return 2;
    } else if (val == -1) {
      return 3;
    } else if (val == -2) {
      return 4;
    } else if (val == -3) {
      return 5;
    }
    return null;
  };

onChangeScore(selection) {

}

submitResult() {
  this.storage.get('club').then((club) => {
    console.log(club);
    	});
  this.storage.get('time').then((time) => {
});
  this.storage.get('day').then((day) => {
  });

  let y = moment().year();
  let w = moment().week();
  let yrwk = moment().format('YYYYwwionic sefve');
console.log(yrwk);

var nHcp  = this.selectedHcp;
var nPoints  =   this.totPts;
var shots = nPoints - 36;
var A = ((nHcp - 5.4) / 0.2);
var E = ((nHcp - 12.4) / 0.3);
var H = ((nHcp - 20.4) / 0.4);
//var C = Math.ceil(A,1);
var D = shots - A;
//var G = Math.ceil(E,1);
var F = shots;
var B = shots - E;
var J = shots - H;
//var K = Math.ceil(H,1);
var C = A;
var G = E;
var K = H;
if (nPoints < 36)
    {
  let revHcp = (parseFloat(nHcp) + 0.1);
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

        }
if (nPoints == 36)
    {
  let revHcp = (parseFloat(nHcp));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

        }
if (nPoints > 36 && (parseFloat(nHcp)) < 5.5)
    {
  let revHcp = (parseFloat(nHcp)) - (shots * 0.1);
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

        }
if (nPoints > 36 && (parseFloat(nHcp) > 5.4) && (parseFloat(nHcp) < 12.5 ) && shots < C)
          {
  let revHcp = (parseFloat(nHcp) - (F * 0.2));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

    }
if (nPoints > 36 && (parseFloat(nHcp) > 5.4)  && (parseFloat(nHcp) < 12.5 ) && shots > C)
         {

  let RHcp = (parseFloat(nHcp) - (A * 0.2));
  let revHcp = (RHcp - (D * 0.1));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

         }

if(nPoints > 36 && (parseFloat(nHcp) > 12.4)  && (parseFloat(nHcp) < 20.5 ) && shots < G)
          {
  let revHcp = (parseFloat(nHcp) - (F * 0.3));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

    }
if (nPoints > 36 && (parseFloat(nHcp) > 12.4)  && (parseFloat(nHcp) < 20.5 ) && shots > G)
         {

  let RHcp = (parseFloat(nHcp) - (E * 0.3));
  let revHcp = (RHcp - (B * 0.2));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;
  
         }
if(nPoints > 36 && (parseFloat(nHcp) > 20.4) && shots < K)
          {
  let revHcp = (parseFloat(nHcp) - (F * 0.4));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;

        }
if(nPoints > 36 && (parseFloat(nHcp) > 20.4) && shots > K)
         {
  let RHcp = (parseFloat(nHcp) - (H * 0.4));
  let revHcp = (RHcp - (J * 0.3));
  var RrevHcp = Math.round( revHcp * 10 ) / 10;
         }

  if (this.selectedPlayer == null) {
       let alert = this.alertCtrl.create({
        title: 'ERROR',
        subTitle: 'PLEASE SELECT A PLAYER',
        buttons: ['Close']
    });
     alert.present();
  
  }else {
      let alert = this.alertCtrl.create({
      title: 'Submit Score',
      subTitle: 'You are about to submit '+ this.selectedPlayer +'\'s score for ' + this.n + ' with a Perpetual Handicap of ' + RrevHcp + ' !',
        buttons: [ {
          text: 'Dismiss',
          handler: () => {
         
          }
        },
      
        {
         
          text: 'Continue',
          handler: () => {
          this.http.get ('http://golf-rollup.co.uk/aAppSubmitScores.php?Club='+ this.Club + '&Player='+ this.selectedPlayer +'&Day='+ this.day +'&Time='+ this.time +'&Pts='+ this.totPts +'&yrwk='+ yrwk +'&Hcp='+ this.selectedHcp +'&RevHcp='+ RrevHcp,"")
          .subscribe(res => {
          this.navCtrl.push(SocresultsPage, {club: this.club});
                })
            }
        }]
   });
    alert.present();
 
  }
}
ionViewDidLoad()

      { 
      
  this.items = ['1','2','3','4','5','6','7','8','9','10','11','12'];
console.log('ionViewDidLoad CardPage');
  }  
}

       	
     
  
  

