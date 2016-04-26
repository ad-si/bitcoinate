//bitcoinate {{ VERSION }} by Adrian Sieber (adriansieber.com)

!function(window, document) {

  var style = document.createElement('style')

  style.type = 'text/css'
  style.innerHTML = '{{ CSS }}'
  document.getElementsByTagName('head')[0].appendChild(style)

  document.addEventListener('DOMContentLoaded', function() {

    var buttons = document.getElementsByClassName('bitcoinate'),
      sentence = 'Please donate bitcoins to: ',
      data,
      i

    for(i = 0; i < buttons.length; i++) {

      buttons[i].title = sentence + buttons[i].dataset.address

      buttons[i].innerHTML = '<span></span>bitcoinate'

      buttons[i].addEventListener('click', function() {
        data = this.dataset

        if(data.type == 'URI')
          window.location.href = 'bitcoin:' + data.address
            + '?amount=' + data.address
            + '&label=' + data.label
        else
          window.prompt(sentence, data.address)

      }, false)
    }

  }, false)

}(window, document)
