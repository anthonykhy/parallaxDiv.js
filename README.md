parallaxDiv.js
==============
[Demo](http://at.mosphe.re/ParallaxDiv/demo.html).

inspired by https://github.com/wagerfield/parallax

parallaxdiv.js is a jQuery plugin that you can create simple background parallax effect in specific div on browser triggered by
- mouseon 
- mobile gyroscope

## Installation

Please add the following assets

```HTML
<script src="js/jquery.parallaxdiv.js"></script>
```

Set your div css and put it inside body

```HTML
	<style>
		body{
			margin:0px;
		}
		#object{    //set the with and height for your parallax div tag
		  width:100%;
			height:300px;
		}
		
	</style>
	...
	
	<body>
		<div id="object"></div>
	</body>
```

Apply javascript
```Javascript
  $('#object').parallaxDiv(backgroundURL);
```

Further customize the parallax background margin and wrapper div name 
If you would rather run parallaxDiv confined to a particular container (instead of using the whole document) you can
change `body` to some other selector.

Default Value below:
``` Html
  {
  	pixelMargin: 20,
  	wrappername: "parallaxWrap"
  }
```
customize the parallax background margin

```Javascript
$('#object').parallaxDiv(backgroundURL,{pixelMargin: 40});
```

If you also want to customize the wrapper name
```Javascript
$('#object').parallaxDiv(backgroundURL,{pixelMargin: 60, wrappername: "theWrapper" });
```

Result HTML
```HTML 
<div id="theWrapper" style="...">
	<div id="object" style="...">
	</div>
</div>
```

Browser support
Only tested with Chrome browser, iOS and android devices. Feel free to give any comments.




