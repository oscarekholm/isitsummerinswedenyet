var responses = ['Nah.', 'Nope.', 'Not even close.', 'Not yet.', 'No.', 'Don\'t even ask...', '":)"', "Don't bother to look outside", 'Possibly a tiny bit of sunshine? Nah.', 'Maybe tomorrow?', 'Keep your hopes up!']

window.onload = function () {
  document.querySelector('.js-summer-answer').innerHTML = responses[Math.floor(Math.random() * responses.length)]
}
