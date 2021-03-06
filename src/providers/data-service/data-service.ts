import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import { IonicPage, NavParams } from 'ionic-angular';
import {CoursesPage} from '../../pages/courses/courses';
@Injectable()
export class DataServiceProvider {
//email : string;
public name;
course : any;
Course : any;
club;
  constructor(public http: Http, private storage: Storage) {

   
  }
  data : any;
  data1 : any;
  dataC : any;
  datad :any;
  datard :any;
  res : any;
  c : any;
  society = "";
  results = "";
  email = "";
  pw = "";
  day:any;
  time:any;
  
  
  load() {
  
  if (this.data1) {
    // already loaded data
    return Promise.resolve(this.data1);
  }
    
    return new Promise(resolve => {
    this.storage.get('password').then((password) => {
    this.pw = password;   
    this.storage.get('email').then((email) => {
    this.email = email;
    
    console.log(this.email);
    this.http.get('http://golf-rollup.co.uk/society/AppSignin.php?email='+this.email+'&password='+this.pw, "")
    	.map(res => res.json())
        .subscribe(res => {
        this.res = (res);
         this.storage.set('society', this.res).then(() => {
         }); 
       //resolve(this.res);
     
    this.http.get('http://golf-rollup.co.uk/society/AppSocPlayer.php?Club='+this.res, "")
    	.map(res => res.json())
		.subscribe(data1 => {
		this.data1 = data1;
		resolve(this.data1);
	console.log(this.data1);
 	 });
  
	});
     });
     	});
        });

}

  loadru() {
  
  if (this.data1) {
    // already loaded data
    return Promise.resolve(this.data1);
  }
    
    return new Promise(resolve => {
    this.storage.get('club').then((club) => {
    this.club = club;   
    this.storage.get('day').then((day) => {
    this.day = day;
    this.storage.get('time').then((time) => {
    this.time = time;
      
    this.http.get('http://golf-rollup.co.uk/aAppTeam.php?Club='+this.club+'&Day='+this.day+'&TeeTime='+this.time, "")
    	.map(res => res.json())
		.subscribe(data1 => {
		this.data1 = data1;
		resolve(this.data1);
	console.log(this.data1);
 	 });
  
	});
     });
     	});
        });

}
reload() {
  
    return new Promise(resolve => {
    this.storage.get('password').then((password) => {
    this.pw = password;   
    this.storage.get('email').then((email) => {
    this.email = email;
    
    console.log(this.email);
    this.http.get('http://golf-rollup.co.uk/society/AppSignin.php?email='+this.email+'&password='+this.pw, "")
    	.map(res => res.json())
        .subscribe(res => {
        this.res = (res);
         this.storage.set('society', this.res).then(() => {
         }); 
       //resolve(this.res);
     
    this.http.get('http://golf-rollup.co.uk/society/AppSocPlayer.php?Club='+this.res, "")
    	.map(res => res.json())
		.subscribe(data1 => {
		this.data1 = data1;
		resolve(this.data1);
	console.log(this.data1);
 	 });
  
	});
     });
     	});
        });

}
reloadru() {
  
    return new Promise(resolve => {
    this.storage.get('club').then((club) => {
    this.club = club;   
    this.storage.get('day').then((day) => {
    this.day = day;
    this.storage.get('time').then((time) => {
    this.time = time;
      
    this.http.get('http://golf-rollup.co.uk/aAppTeam.php?Club='+this.club+'&Day='+this.day+'&TeeTime='+this.time, "")
    	.map(res => res.json())
		.subscribe(data1 => {
		this.data1 = data1;
		resolve(this.data1);
	console.log(this.data1);
 	 });
  
	});
     });
     	});
        });

}


loadCs() {
    
if (this.datad) {
    // already loaded data
    return Promise.resolve(this.datad);

      }
  return new Promise(resolve => {
    this.storage.get('course').then((course) => {
    this.course = course;
    console.log(this.course);
    this.c = course.Course;
    this.http.get('http://golf-rollup.co.uk/society/appCourses.php?Club="' + this.c +'"', "")
    .map(res => res.json())
    .subscribe(datad => {
    this.datad = datad;
    resolve(this.datad);
  }); 
  });
 })  

}


loadCru() {
    
if (this.datard) {
    // already loaded data
    return Promise.resolve(this.datard);

      }
  return new Promise(resolve => {
    this.storage.get('club').then((club) => {
    this.club = club;
    console.log(this.club);
    //this.c = course.Course;
    this.http.get('http://golf-rollup.co.uk/aAppCourses.php?Club=' + this.club , "")
    .map(res => res.json())
    .subscribe(datard => {
    this.datard = datard;
    resolve(this.datard);
  }); 
  });
 })  

}

loadCourse() {
if (this.dataC) {
    // already loaded data
    return Promise.resolve(this.dataC);
  }
  return new Promise(resolve => {
  
  this.http.get('http://golf-rollup.co.uk/society/appSocCourses.php', "")
      .map(res => res.json())
    .subscribe(dataC => {
    this.dataC = dataC;
    resolve(this.dataC);
  
   });
 })  

}


loadCourseRU() {
if (this.dataC) {
    return Promise.resolve(this.dataC);
  }
  return new Promise(resolve => {
  
  this.http.get('http://golf-rollup.co.uk/aAppCourse.php', "")
      .map(res => res.json())
    .subscribe(dataC => {
    this.dataC = dataC;
    resolve(this.dataC);
  
   });
 })  

}
loadCourses() {
if (this.data) {
  return Promise.resolve(this.data);
  }
  return new Promise(resolve => {
  
  this.storage.get('password').then((password) => {
    this.pw = password;   
    this.storage.get('email').then((email) => {
    this.email = email;
    
    console.log(this.email);
    this.http.get('http://golf-rollup.co.uk/society/AppSignin.php?email='+this.email+'&password='+this.pw, "")
    	.map(res => res.json())
        .subscribe(res => {
        this.res = (res);
         this.storage.set('society', this.res).then(() => {
         });
  
  
  
  
  this.storage.get('society').then((society) => {
  console.log(society);
 
  this.http.get('http://golf-rollup.co.uk/society/maxYear.php?Club=' +society, "")
    .map(res => res.json())
    .subscribe(data => {
    this.data = data;
  this.http.get('http://golf-rollup.co.uk/society/socCoursesToPlay.php?Club=' +society +'&yr='+this.data, "")
     .map(res => res.json())
    .subscribe(data => {
    this.data = (data);
    resolve(this.data);
  console.log(this.data);
   });
    })
    })
    })
    })
})
})
}

}

