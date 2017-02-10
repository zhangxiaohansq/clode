'use strict';

DOMReady(function(){
	/*-------------------------导航------------------------------*/
	;(function(){
		var oNav = document.getElementById('nav');
		var aLi = oNav.children;
		var iNow = 0;
		for(var i =0 ; i<aLi.length; i++){
			aLi[i].index=i;
			aLi[i].onclick = function(){
				iNow = this.index;
				for(var i =0; i<aLi.length; i++){
					getChild(aLi[i]).first.className = '';
				}
				getChild(aLi[iNow]).first.className = 'active';
			};
		}
	})();	
	/*-------------------------轮播图------------------------------*/
	;(function(){
		var oBanner = document.getElementById('banner');
		var oOl = oBanner.getElementsByTagName('ol')[0];
		var aBtn = oOl.children;
		var oUl = oBanner.getElementsByTagName('ul')[0];
		var iNow = 0;
		var timer = null;
		for(var i =0; i<aBtn.length; i++){
			aBtn[i].index = i;
			aBtn[i].onmouseover = function(){
				clearInterval(timer);
				iNow = this.index;
				tab();
			};
			aBtn[i].onmouseout = function(){
				timer = setInterval(next,2000);
			};
		}
		function tab(){
			for(var i = 0; i<aBtn.length; i++){
				aBtn[i].className = 'fl';
			}
			aBtn[iNow].className = 'fl active';
			oUl.style.left = '-'+iNow+'00%';
		}
		function next(){
			iNow++;
			if(iNow == aBtn.length){
				iNow = 0;
			}
			tab();
		}
		timer = setInterval(next,2000);
	})();
	/*-------------经典案例----------------*/
	;(function(){
		var oCase = document.getElementById('case');
		var oBtnl = getByClass(oCase,'btn-l')[0];
		var oBtnr = getByClass(oCase,'btn-r')[0];
		var oMov = document.getElementById('mov');
		var oUl = oMov.getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		var iNow = 0;
		var timer = null;
		
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width = aLi.length*(aLi[0].offsetWidth+40)-40+'px';
		var W = oUl.offsetWidth/2;
		var speed = 0;
		function left(){
			clearInterval(timer);
			timer = setInterval(function(){
				speed -=2;
				if(speed<0){
					oUl.style.left = speed%W+'px';
				}else{
					oUl.style.left = (speed%W-W)%W+'px';
				}
			},30);
		}
		function right(){
			clearInterval(timer);
			timer = setInterval(function(){
				speed +=2;
				if(speed<0){
					oUl.style.left = speed%W+'px';
				}else{
					oUl.style.left = (speed%W-W)%W+'px';
				}
			},30);
		}
		right();
		oBtnl.onclick = function(){
			oBtnl.style.background = '#57a9ef';
			oBtnr.style.background = '#e6e6e6';
			left();
		};
		oBtnr.onclick = function(){
			oBtnr.style.background = '#57a9ef';
			oBtnl.style.background = '#e6e6e6';
			right();
		};
		oMov.onmouseover = function(){
			clearInterval(timer);
		};
		oMov.onmouseout = function(){
			right();
		};
	})();
	
	
});
