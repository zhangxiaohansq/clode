'use strict';

DOMReady(function(){
	/*commin*/
	;(function(){
		var oCon = document.getElementById('con');
		var aLi = oCon.getElementsByTagName('li');
		var aDiv = oCon.getElementsByTagName('div');
		var aP = oCon.getElementsByTagName('p');
		for(var i =0; i<aDiv.length; i++){
			aDiv[i].index = i;
			aDiv[i].onmouseover = function(){
				move(this,{top:-100},{easing:'ease-out'});
				move(aP[this.index],{height:100},{easing:'ease-out'});
			};
			aDiv[i].onmouseout = function(){
				move(this,{top:0},{easing:'ease-out'});
				move(aP[this.index],{height:48},{easing:'ease-out'});
			};
		}

		/*function getDir(obj,ev){
			var x = obj.offsetLeft + offsetWidth/2 - ev.clientX;
			var y = obj.offsetTop + offsetHeight/2 - ev.cliengY;
			return Math.round(Math.atan2(y,x)*180/Math.PI+180/90)%4;
		}
		function through(obj){
			var oA = obj.getElementsByTagName('a')[0];
			//var oA = obj.children[0];
			obj.onmouseenter = function(ev){
				var oEvent = ev || event;
				var dir = getDir(obj,oEvent);
				switch(dir){
					case 0:
						oA.style.left = '260px';
						oA.style.top=0;
						break;
					case 1:
						oA.style.left = 0;
						oA.style.top='260px';
						break;
					case 2:
						oA.style.left = '-260px';
						oA.style.top=0;
						break;
					case 3:
						oA.style.left = 0;
						oA.style.top='-260px';
						break;
				}
				move(oA,{left:0,top:0});
			};
			obj.onmouseleave = function(ev){
				var oEvent = ev || event;
				var dir = getDir(obj,oEvent);
				switch(dir){
					case 0:
						move(oA,{left:260,top:0});
						break;
					case 1:
						move(oA,{left:0,top:260});
						break;
					case 2:
						move(oA,{left:-260,top:0});
						break;
					case 3:
						move(oA,{left:0,top:-260});
						break;
				}
			};
		}
		var oSlide = document.getElementById('slide');
		var aLi = oSlide.getElementsByTagName('li');
		var aLink = oSlide.getElementsByTagName('a');
		//alert(aLink.length)
		for(var i =0; i<aLi.length; i++){
			through(aLi[i]);
		}*/
	})();
});