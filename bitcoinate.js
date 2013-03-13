/*@preserve bitcoinate by Adrian Sieber*/

(function (window, document) {

	var style = document.createElement('style'),
		buttons = document.getElementsByClassName('bitcoinate'),
		sentence = 'Please donate bitcoins to:',
		i,
		d;

	style.type = "text/css";
	style.innerHTML = '.bitcoinate{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f7931a), color-stop(100%, #c16c07));background-image:-webkit-linear-gradient(#f7931a,#c16c07);background-image:-moz-linear-gradient(#f7931a,#c16c07);background-image:-o-linear-gradient(#f7931a,#c16c07);background-image:linear-gradient(#f7931a,#c16c07);font:900 12px/18px Arial,sans-serif;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.5);border:1px solid #c16c07;margin:0;cursor:pointer}.bitcoinate:hover,.bitcoinate:focus{background-image:-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #f89e34), color-stop(100%, #e88208));background-image:-webkit-linear-gradient(#f89e34,#e88208);background-image:-moz-linear-gradient(#f89e34,#e88208);background-image:-o-linear-gradient(#f89e34,#e88208);background-image:linear-gradient(#f89e34,#e88208)}.bitcoinate img{display:inline-block;vertical-align:middle;position:relative;margin:0 4px 0 0}.bitcoinate[data-size="20"]{padding:0 3px;border-radius:2px}.bitcoinate[data-size="20"]:active{box-shadow:inset 0 0 4px rgba(0,0,0,0.5)}.bitcoinate[data-size="20"] img{width:10px;height:14px;bottom:2px}.bitcoinate[data-size="30"]{padding:0 8px;font-size:18px;line-height:28px;border-radius:4px}.bitcoinate[data-size="30"]:active{box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.bitcoinate[data-size="30"] img{width:15px;height:22px;bottom:3px}.bitcoinate[data-size="50"]{padding:0 12px;font-size:32px;line-height:48px;border-radius:5px;text-shadow:0 -2px 0 rgba(0,0,0,0.5)}.bitcoinate[data-size="50"]:active{box-shadow:inset 0 0 10px rgba(0,0,0,0.5)}.bitcoinate[data-size="50"] img{width:25px;height:36px;margin:0 8px 0 0;bottom:4px}';
	document.body.appendChild(style);

	for (i = 0; i < buttons.length; i++) {
		buttons[i].title = sentence + buttons[i].dataset.address;
		buttons[i].innerHTML = '<img src="https://raw.github.com/adius/bitcoinate/v0.1.1/img/bitcoinate' + buttons[i].dataset.size + '.png" alt="B" />bitcoinate';

		buttons[i].addEventListener('click', function () {
			d = this.dataset;
			d.type == "URI" ? window.location.href = 'bitcoin:' + d.address + '?amount=' + d.address + '&label=' + d.label : window.prompt(sentence, d.address);
		}, false);
	}

})(window, document);