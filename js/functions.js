(function () {

	var myBitcoinAddress = '1LFk8i74MTBEKfViAfvKsbX4mG2iFfRiBF',
		areas = document.getElementsByTagName("textarea"),
		elements = document.forms[0].elements,
		i;

	function $(s) {
		return document.getElementById(s);
	}

	$("logo").addEventListener('click', function () {
		window.prompt('Please donate bitcoins to:', myBitcoinAddress);
	}, false);

	for (i = 0; i < elements.length; i++) {
		elements[i].addEventListener('input', update, false);
		elements[i].addEventListener('change', update, false);
	}

	function update() {
		var buttonSize = $("buttonSize").value,
			donateAddress = $("donateAddress").value || myBitcoinAddress,
			type = $('URI').checked ? 'URI' : '',
			amount = $("amount").value || 0,
			label = $("label").value || "",
			sentence = 'Please donate bitcoins to: ',
			button = $('showcase').firstChild;

		button.getElementsByTagName('img')[0].src = 'https://raw.github.com/adius/bitcoinate/master/img/bitcoinate' + buttonSize + '.png';
		button.title = sentence + donateAddress;
		button.dataset.size = buttonSize;
		button.dataset.address = donateAddress;
		type ? button.dataset.type = type : delete button.dataset.type;
		(amount && $('URI').checked) ? button.dataset.amount = amount : delete button.dataset.amount;
		(label && $('URI').checked) ? button.dataset.label = label : delete button.dataset.label;
		$('optional').style.display = $('URI').checked ? 'block': 'none';

		$("htmlCode").innerHTML = $('showcase').innerHTML;
	}

	for (i = 0; i < areas.length; i++) {
		areas[i].addEventListener('click', function () {
			this.select();
		}, false);
	}

})();