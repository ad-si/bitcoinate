/*bitcoinate by Adrian Sieber (adriansieber.com)*/

!function (window, document) {

	var style = document.createElement('style'),
		buttons = document.getElementsByClassName('bitcoinate'),
		sentence = 'Please donate bitcoins to:',
		i,
		d

	style.type = 'text/css'
	style.innerHTML = '{{ CSS }}'
	document.body.appendChild(style)

	for (i = 0; i < buttons.length; i++) {
		buttons[i].title = sentence + buttons[i].dataset.address;
		buttons[i].innerHTML = '<img src="https://raw.github.com/adius/bitcoinate/v0.1.2/img/bitcoinate' + buttons[i].dataset.size + '.png" alt="B" />bitcoinate'

		buttons[i].addEventListener('click', function () {
			d = this.dataset
			d.type == "URI" ? window.location.href = 'bitcoin:' + d.address + '?amount=' + d.address + '&label=' + d.label : window.prompt(sentence, d.address)
		}, false)
	}

}(window, document)