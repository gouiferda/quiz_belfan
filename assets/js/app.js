var treeAnsweres = {
  'واش تعلمتي شي حاجة ليوم': [
    {
      نعم: {
        'واش تبغي تشارك معانا': [
          {
            نعم: {
              'تقدر تبدا تكتب أفكارك وتنظمها': ['https://www.google.com/']
            }
          },
          {
            'مكنعرفش نكتب': {
              'تقدر تبدا تقرا باش تعلم تكتب': [
                {
                  'فين نلقى لكُتب': {
                    'يمكن ليك تبدا بكتاب': ['https://www.google.com/']
                  }
                },
                {
                  'معنديش مع القراية': {
                    'المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة': [
                      'https://www.google2.com/'
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      لا: {
        'واش مهتم تعلم حوايج جداد': [
          {
            نعم: {
              'بزاف ديال المفكرين و الشخصيات مستاعدين يعاونوك': [
                {
                  'يمكن ليك تبدا بكتاب': {
                    'يمكن ليك تبدا بكتاب': ['https://www.google.com/']
                  }
                }
              ]
            }
          },
          {
            لا: {
              'تبغي تعيش تجارب مختلفة لي تخليك تفهم نفسك أو تحسن من مستقبلك؟': [
                {
                    'يمكن ليك تبدا بكتاب': {
                      'يمكن ليك تبدا بكتاب': ['https://www.google.com/']
                    }
                  },
                  {
                    'المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة': {
                        'المغرب محتل الرتبة 56 من أصل 57 على مستوى القراءة': ['https://www.google.com/']
                    }
                  }
              ]
            }
          }
        ]
      }
    }
  ]
}

var buttonsFieldStart = document.getElementById('buttonsFieldStart')
var buttonsFieldsOptions = document.getElementById('buttonsFieldsOptions')
var btnStart = document.getElementById('btnStart')
var btnOption1 = document.getElementById('btnOption1')
var btnOption2 = document.getElementById('btnOption2')
var current_chosen_answer = ''
var current_tree_obj = treeAnsweres
var current_question = ''
var current_question_index = 0

function getCurrentTime () {
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let secs = date.getSeconds()
  let currentDate = `${year}-${month}-${day} ${hour}:${minutes}:${secs}`
  return currentDate
}

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
    case 'كيفاش':
    case 'اشنو الحل':
    case 'كي غادي ندير ليها':
    case 'فين نلقى لكُتب':
    case 'يمكن ليك تبدا بكتاب':
      return 0
    case 'لا':
    case 'معنديش مع القراية':
      return 1
  }
  if (answerPicked == 'نعم') {
    return 0
  }
  return 1
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

function moveTree () {
  if (current_chosen_answer != '') {
    myLog('moveTree current_chosen_answer : ' + current_chosen_answer)
    myLog('moveTree current_question : ' + current_question)
    var answerIndex = getAnswerIndex(current_chosen_answer)
    myLog('moveTree answerIndex : ' + answerIndex)
    myLog('moveTree typeof current_tree_obj : ' + typeof(current_tree_obj))
    myLog('moveTree new current_tree_obj : ' + JSON.stringify(current_tree_obj))
    if (typeof(current_tree_obj) != 'string') {
      current_tree_obj =
        current_tree_obj[current_question][answerIndex][current_chosen_answer]
        
    }

   
  }
}

function setNextQuestion () {
  if (current_question_index > 0) {
    moveTree()
  }
  if (typeof(current_tree_obj) == 'string') {
    questionField.innerHTML = current_tree_obj
    btnOption1.innerHTML = ''
    btnOption2.innerHTML = ''
    hideElem(btnOption1)
    hideElem(btnOption2)
  } else {
    first_key = Object.keys(current_tree_obj)[0]
    question_got = first_key
    current_question = question_got
    question_obj = current_tree_obj[first_key]

    emptyDiv(buttonsFieldsOptions)
    for (let i = 0; i < question_obj.length; i++) {
      if (typeof(question_obj[i]) == 'string') {
        answer_got = question_obj[i]
      } else {
        answer_got = Object.keys(question_obj[i])[0]
      }
      switch (i) {
        case 0:
          addEleme(buttonsFieldsOptions, btnOption1)
          btnOption1.innerHTML = answer_got
          break
        case 1:
          addEleme(buttonsFieldsOptions, btnOption2)
          btnOption2.innerHTML = answer_got
          break
      }
    }
    questionField.innerHTML = question_got
  }
  // myLog('setNextQuestion started')

  if (current_question_index == 0) {
    moveTree()
  }
  current_question_index = current_question_index + 1
  // myLog('setNextQuestion ended')
}

function btnStartCLicked () {
  // myLog('btnStart clicked')
  setElementsVisible()
  setNextQuestion()
}

function btnOption1Clicked () {
  current_chosen_answer = btnOption1.innerHTML
  // myLog('btnOption1 clicked ' + current_chosen_answer)
  setNextQuestion()
}

function btnOption2Clicked () {
  current_chosen_answer = btnOption2.innerHTML
  // myLog('btnOption2 clicked ' + current_chosen_answer)
  setNextQuestion()
}

btnStart.addEventListener('click', btnStartCLicked)
btnOption1.addEventListener('click', btnOption1Clicked)
btnOption2.addEventListener('click', btnOption2Clicked)
