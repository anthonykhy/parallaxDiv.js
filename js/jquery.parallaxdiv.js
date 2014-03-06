/*Copyright (c) 2014, Anthony Kwok http://at.mosphe.re
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
 
(function($) {  
	$.fn.parallaxDiv = function(PhotoURL,options) {
		var settings = $.extend({
			pixelMargin: 20,
			wrappername: "parallaxWrap"
		}, options );
		var element = $(this);  
		var oriWidth = element.width();
		var oriHeight = element.height();
		
		element.css({
			"background-repeat": "no-repeat","-webkit-background-size": "cover","-moz-background-size": "cover",
			"-o-background-size": "cover",
			"background-size": "cover","background-position": "center center",
			"background-image":'url("' + PhotoURL + '")',
			"height":element.height()+(settings.pixelMargin*2),
			"width":element.width()+(settings.pixelMargin*2),
		});
		
		element.wrapAll('<div id="'+settings.wrappername+'" style="overflow:hidden;padding:0px;margin:0px; width:'+oriWidth+'px; height:'+oriHeight+'px;" ></div>');
		//for mobile
		if (window.DeviceMotionEvent != undefined) {
			window.ondevicemotion = function(e) {
				//console.log('translate3d('+((e.accelerationIncludingGravity.x/10)*settings.pixelMargin)+'px, '+(-(e.accelerationIncludingGravity.y/10)*settings.pixelMargin)+'px, 0px)');
				
				var xMove = (((e.accelerationIncludingGravity.x/10)*settings.pixelMargin-settings.pixelMargin))
				var yMove = (((e.accelerationIncludingGravity.y/10)*settings.pixelMargin)-settings.pixelMargin)
				
				element.css('-webkit-transform', 'translate3d('+ xMove +'px, '+ yMove +'px, 0px)');	
				element.children().css('-webkit-transform', 'translate3d('+(-1*xMove)+'px, '+(-1*yMove)+'px, 0px)');	
			}
		}
		
		element.bind("mousemove",function(e){
			var offset = element.offset(); 
			var x = e.pageX - offset.left;
			var y = e.pageY - offset.top;
			var width = $(this).width();
			var height = $(this).height();
			var halfX = width/2;
			var halfY = height/2;
			var offsetX = (halfX-x)/halfX;
			var offsetY = (halfY-y)/halfY;
			var xMove = (offsetX*settings.pixelMargin-settings.pixelMargin);
			var yMove = (offsetY*settings.pixelMargin-settings.pixelMargin);

			element.css('-webkit-transform', 'translate3d('+xMove+'px, '+yMove+'px, 0px)');
			element.children().css('-webkit-transform', 'translate3d('+(-1*xMove)+'px, '+(-1*yMove)+'px, 0px)');
		});
	}		  
})(jQuery);
