(function(){

    var myBitcoinAddress = '1NNudvcdKamqzt6yvkzn9SMQS7GmX2UL7n';

	function $(s){
		return document.getElementById(s);
	}
	
	$("logo").addEventListener('click', function(){
		window.prompt('Please donate bitcoins to:', myBitcoinAddress);
	}, false);
	
	
	$("buttonSize").addEventListener('change', function(){
		update();
	},false);
	$("donateAddress").addEventListener('input', function(){
		update();
	},false);
	
	
	function update(){
		var buttonSize = $("buttonSize").value;

        var donateAddress = $("donateAddress").value || myBitcoinAddress;
 		
		$("htmlCode").innerHTML = '<button class="bitcoinate" data-size="'+ buttonSize +'" data-address="'+ donateAddress +'">bitcoinate<button/>';
	}
	
	var areas = document.getElementsByTagName("textarea");
	
	for(var i = 0; i < areas.length; i++){
		areas[i].addEventListener('click', function(){
			this.select();
		}, false);
	}
	
})();