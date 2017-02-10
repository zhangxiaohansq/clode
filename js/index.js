'use strict';

DOMReady(function(){
	/*-------------我们的服务----------------*/
	var oServe = document.getElementById('serve');
	var aServebtn = oServe.getElementsByTagName('a');
	for(var i =0; i<aServebtn.length; i++){
		aServebtn[i].onmouseover = function(){
			for(var i=0; i<aServebtn.length; i++){
				aServebtn[i].className = '';
				aServebtn[i].style.background = '#fff';

			}
			this.className ='links';
			this.style.background = '#ff9412';
		};
	}
});