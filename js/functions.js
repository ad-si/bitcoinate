(function(){
	
	document.getElementById("logo").addEventListener('click', function(){
		window.prompt('Please donate bitcoins to:', '1LFk8i74MTBEKfViAfvKsbX4mG2iFfRiBF');
	}, false);
	
	
	document.getElementById("buttonSize").addEventListener('change', function(){
		update();
	},false);
	document.getElementById("donateAddress").addEventListener('input', function(){
		update();
	},false);
	
	
	function update(){
		var d = document.getElementById("htmlCode");
		var buttonSize = document.getElementById("buttonSize").value;
 		var donateAddress = document.getElementById("donateAddress").value;
		d.innerHTML = '<button class="bitcoinate" data-size="'+ buttonSize +'" data-address="'+ donateAddress +'" >bitcoinate<button/>this.value';
	}
	
	var areas = document.getElementsByTagName("textarea");
	
	for(var i = 0; i < areas.length; i++){
		areas[i].addEventListener('click', function(){
			this.select();
		}, false);
	}
	
})();