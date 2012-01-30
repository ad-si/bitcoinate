// bitcoinate by Adrian Sieber

(function(){
	var container = document.createElement('link');
		container.rel = "stylesheet";
		container.type = "text/css";
		container.href="https://raw.github.com/adius/bitcoinate/master/css/bitcoinate.css";
		document.head.appendChild(container);
		
	var buttons = document.getElementsByClassName('bitcoinate');
	var sentence = 'Please donate bitcoins to:';

	for(i in buttons){
		buttons[i].title = sentence + buttons[i].dataset.address;
		
		buttons[i].addEventListener('click', function(){
			window.prompt(sentence, this.dataset.address);
		}, false);
	}

})();