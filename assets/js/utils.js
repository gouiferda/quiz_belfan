function myLog (msg) {
  var nowTime = getCurrentTime() 
  console.log(nowTime + ': ' + msg)
}

function getAnswerIndex (answerPicked) {
  answerPickedF = answerPicked.replace('?', '')
  answerPickedF = answerPicked.replace('؟', '')
  answerPickedF = answerPickedF.replace('!', '')
  answerPickedF = answerPickedF.replace('.', '')

  switch (answerPickedF) {
    case 'نعم':
    case 'أه':
    case 'كيفاش':
    case 'اشنو الحل':
    case 'كي غادي ندير ليها':
    case 'يمكن ليك تبدا بكتاب':
      case 'معنديش مع القراية':
      return 1
    case 'لا':
      case 'فين نلقى لكُتب':
      return 0
  }
  if (answerPicked == 'نعم') {
    return 1
  }
  return 0
}

function hideElem (elem) {
  if (!elem.classList.contains('invisible')) {
    elem.classList.add('invisible')
  }
}

function showElem (elem) {
  if (elem.classList.contains('invisible')) {
    elem.classList.remove('invisible')
  }
}

function emptyDiv (elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.lastChild)
  }
}

function deleteElem (elem) {}

function addEleme (elem, node) {
  elem.appendChild(node)
}

function setElementsVisible () {
  if (!buttonsFieldStart.classList.contains('invisible')) {
    buttonsFieldStart.classList.add('invisible')
  }
  if (buttonsFieldsOptions.classList.contains('invisible')) {
    buttonsFieldsOptions.classList.remove('invisible')
  }
}