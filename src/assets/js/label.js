
function Label(opt_options) {

 this.setValues(opt_options);


 var span = this.span_ = document.createElement('span');
 span.style.cssText = 'position: relative; left: -50%; top: -8px; ' +
                      'white-space: nowrap; border: 1px solid blue; ' +
                      'padding: 2px; background-color: white';

 var div = this.div_ = document.createElement('div');
 div.appendChild(span);
 div.style.cssText = 'position: absolute; display: none';
};
Label.prototype = new google.maps.OverlayView;

Label.prototype.onAdd = function() {
 var pane = this.getPanes().overlayLayer;
 pane.appendChild(this.div_);

 var me = this;
 this.listeners_ = [
   google.maps.event.addListener(this, 'position_changed',

function() { me.draw(); }),
     google.maps.event.addListener(this, 'text_changed',
function() { me.draw(); })
 ];
};

Label.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);

 for (var i = 0, I = this.listeners_.length; i < I; ++i) {
   google.maps.event.removeListener(this.listeners_[i]);

 }
};

Label.prototype.draw = function() {

 var projection = this.getProjection();
 var position = projection.fromLatLngToDivPixel(
     this.position

 );

 var div = this.div_;
 div.style.left = position.x + 'px';
 div.style.top = position.y + 'px';
 div.style.display = 'block';
 div.style.zIndex = 255;

 this.span_.innerHTML = this.text; //this.get('text').toString();
};
