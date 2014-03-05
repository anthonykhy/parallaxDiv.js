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
				element.css('-webkit-transform', 'translate3d('+(((e.accelerationIncludingGravity.x/10)*settings.pixelMargin-settings.pixelMargin))+'px, '+(((e.accelerationIncludingGravity.y/10)*settings.pixelMargin)-settings.pixelMargin)+'px, 0px)');	
				element.children().css('-webkit-transform', 'translate3d('+(-1*((e.accelerationIncludingGravity.x/10)*settings.pixelMargin-settings.pixelMargin))+'px, '+(-1*((e.accelerationIncludingGravity.y/10)*settings.pixelMargin)-settings.pixelMargin)+'px, 0px)');	
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

			element.css('-webkit-transform', 'translate3d('+(offsetX*settings.pixelMargin-settings.pixelMargin)+'px, '+(offsetY*settings.pixelMargin-settings.pixelMargin)+'px, 0px)');
			element.children().css('-webkit-transform', 'translate3d('+(-1*(offsetX*settings.pixelMargin-settings.pixelMargin))+'px, '+(-1*(offsetY*settings.pixelMargin-settings.pixelMargin))+'px, 0px)');
		});
	}		  
})(jQuery);
