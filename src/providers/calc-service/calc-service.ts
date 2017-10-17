import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CalcServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CalcServiceProvider {

  constructor(public http: Http) {
    console.log('Hello CalcServiceProvider Provider');
  }

 getShots = function (par) {

		if (!this.selectedHcp) {
			return null;
		}
		var val =  this.selHcp - par.Index;

		if (val > 17.4) {
			return 2;
		} else if (val >= -0.5) {
			return 1;
		} else if (val < -0.5) {
			return 0;
		}
	}; 

}
