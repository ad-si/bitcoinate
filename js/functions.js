(function(){

	function $(s){
		return document.getElementById(s);
	}
	
	$("logo").addEventListener('click', function(){
		window.prompt('Please donate bitcoins to:', '1LFk8i74MTBEKfViAfvKsbX4mG2iFfRiBF');
	}, false);
	
	
	$("buttonSize").addEventListener('change', function(){
		update();
	},false);
	$("donateAddress").addEventListener('input', function(){
		update();
	},false);
	
	
	function update(){
		var buttonSize = $("buttonSize").value;
 		
 		if($("donateAddress").value == ""){
 			var donateAddress = "1LFk8i74MTBEKfViAfvKsbX4mG2iFfRiBF"
 		}else{
 			var donateAddress = $("donateAddress").value;
 		}
 		
		$("htmlCode").innerHTML = '<button class="bitcoinate" data-size="'+ buttonSize +'" data-address="'+ donateAddress +'" >bitcoinate<button/>this.value';
	}
	
	var areas = document.getElementsByTagName("textarea");
	
	for(var i = 0; i < areas.length; i++){
		areas[i].addEventListener('click', function(){
			this.select();
		}, false);
	}
	
})();