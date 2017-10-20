import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
declare var addLabel;
declare var clearLabels: any;

@Component({
  selector: 'gps-page',
  templateUrl: 'gps.html'
})
export class GpsPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  poly: any;
  removeLabel: any;
  labels = [];
  Label: any;
  
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
  
   addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  
  
 
}

 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
    
  

 console.log ("01");
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
    this.geolocation.getCurrentPosition().then((position) => {
 
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      }
     var startCoordinates = [
            latLng
        ];
      var map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let poly = new google.maps.Polyline({
      path: startCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 3
      });
      poly.setMap(map);
      var marker = new google.maps.Marker({
      position: map.getCenter(),
      draggable:true,
      map: map,
        });
console.log (latLng);
console.log ("1");
    google.maps.event.addListener(map, 'click', addLatLng);
    
     //this.refresh = function() {
     // $window.location.reload();
      //      }

     var path = poly.getPath();


    function addLatLng(event) {
         path.push(event.latLng);
       }
    
    google.maps.event.addListener(map, 'click', function(e) {
        placeMarker(e.latLng, map);

     });


    function placeMarker(position, map) {
    var newMarker = new google.maps.Marker({
       position: position,
       map: map,
       draggable:true

        });

    newMarker.addListener('dragend', handleEvent) ;

    var newlat = newMarker.getPosition().lat();
    var newlng = newMarker.getPosition().lng();
    var f = new google.maps.LatLng(newlat,newlng);
    var dis = (google.maps.geometry.spherical.computeDistanceBetween(latLng, f)* 1.09361)
    var d = dis.toFixed(0);
    var dism = (google.maps.geometry.spherical.computeDistanceBetween(latLng, f))
    var dm = dism.toFixed(0);



          document.getElementById('total').innerHTML = d + ' yards';
          document.getElementById('totalm').innerHTML = dm + ' mtrs';

          this.clearLabels();

           for (var i = 0; i < path.getLength() - 1; i++) {
               var start = path.getAt(i);
               var end = path.getAt(i + 1);
               var length = ((google.maps.geometry.spherical.computeDistanceBetween(start, end))*1.09361).toFixed(0);

               var midpoint = new google.maps.LatLng(
                   (start.lat() + end.lat()) *0.5,
                   (start.lng() + end.lng()) *0.5
               );
          
        this.addLabel(new this.Label({
            map: map,
            position: midpoint,
            text: length + " yds"
              }));

           }
       var labelMarker = new google.maps.Marker({
			position: midpoint,
			map: map,
			visible: false
	});
 };
       function handleEvent(event) {
          //removeLabel();
           path.pop();
           path.push(event.latLng);
           this.clearLabels();
           for (var i = 0; i < path.getLength() - 1; i++) {
               var start = path.getAt(i);
               var end = path.getAt(i + 1);
               var length = ((google.maps.geometry.spherical.computeDistanceBetween(start, end))*1.09361).toFixed(0);

               var midpoint = new google.maps.LatLng(
                   (start.lat() + end.lat()) / 2,
                   (start.lng() + end.lng()) / 2
               );

         this.addLabel(new this.Label({
            map: map,
            position: midpoint,
           text: length + " yds"
                }));
                
                 

    addLabel = function(label) {
        this.labels.push(label);
    };

    clearLabels = function() {
        while (this.labels.length) {
            var label = this.labels[this.labels.length - 1];
            label.onRemove();
            this.labels.pop();
        }
    };

         var lat = event.latLng.lat();
         var lng = event.latLng.lng();
         var f = new google.maps.LatLng(lat,lng);
         var dis = (google.maps.geometry.spherical.computeDistanceBetween(latLng, f)* 1.09361)
         this.d2 = dis.toFixed(0);
         var dism = (google.maps.geometry.spherical.computeDistanceBetween(latLng, f))
         var dm = dism.toFixed(0);
         document.getElementById('total').innerHTML = this.d2 + ' yards';
         document.getElementById('totalm').innerHTML = dm + ' mtrs';

      }
    }

 
       });
 
  }
 
 
}