//bitcoinate {{ VERSION }} by Adrian Sieber (adriansieber.com)

((window, document) => {
  'use strict'

  const style = document.createElement('style')

  style.type = 'text/css'
  style.innerHTML = '{{ CSS }}'

  document
    .getElementsByTagName('head')[0]
    .appendChild(style)

  document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.getElementsByClassName('bitcoinate')
    const sentence = 'Please donate bitcoins to: '

    for (let i = 0; i < buttons.length; i++) {

      buttons[i].title = sentence + buttons[i].dataset.address

      buttons[i].innerHTML = '<span></span>bitcoinate'

      buttons[i].addEventListener('click', function () {
        const data = this.dataset

        if (data.type == 'URI') {
          const bitcoinURI = `bitcoin:${data.address}?` +
            Object.keys(data)
              .map(key => {
                if (['address', 'size', 'type'].indexOf(key) === -1) {
                  return key + '=' + data[key]
                }
              })
              .filter(parameter => Boolean(parameter))
              .join('&')

          window.location.href = encodeURI(bitcoinURI)
        }
        else {
          window.prompt(sentence, data.address)
        }
      }, false)
    }
  }, false)

})(window, document)
