var treeAnsweres = {
  'واش تعلمتي شي حاجة اليوم': [ 
    {
      لا: {
        'واش مهتم تعلم حوايج جداد؟': [ 
          {
            لا: {
              'تبغي تعيش تجارب مختلفة لي تخليك تفهم نفسك أو تحسن من مستقبلك؟': [ 
                  {
                    'لا': {
                        'فراسك المغرب حتل الرتبة 56 من أصل 57 بلاد شاركات فدراسة لقياس تقدم مستوى القراءة في العالم': ['مصدر المعلومة']
                    }
                  },  {
                    'نعم': {
                      'يمكن ليك تبدا بكتاب': ['https://www.google.com/']
                    }
                  }
              ]
            }
          },
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
          }
        ]
      }
    },
    {
      نعم: {
        'تبغي تكتب لينا شنو تعلمتي؟': [ 
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
                    'واش فراسك 66% ديال المتمدرسين فالمغرب مكيعرفو لا يفهمو لا يكتبو نص بسيط بأي لغة كان. حتال إمتا أنبقاو هاكا؟':[
                      'مصدر المعلومة'
                    ]
                  }
                }
              ]
            }
          },
          {
            نعم: {
              'هنا تقدر تبدا تكتب أفكارك وتنظمها': ['ouino.connectinstitute.ma']
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
  
function moveTree () {
  if (current_chosen_answer != '') {
    //myLog('moveTree current_chosen_answer : ' + current_chosen_answer)
    //myLog('moveTree current_question : ' + current_question)
    var answerIndex = getAnswerIndex(current_chosen_answer)
    //myLog('moveTree answerIndex : ' + answerIndex)
    //myLog('moveTree typeof current_tree_obj : ' + typeof(current_tree_obj))
    //myLog('moveTree new current_tree_obj : ' + JSON.stringify(current_tree_obj))
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
  if (current_question_index == 0) {
    moveTree()
  }
  current_question_index = current_question_index + 1 
}

function btnStartCLicked () { 
  setElementsVisible()
  setNextQuestion()
}

function btnOption1Clicked () {
  current_chosen_answer = btnOption1.innerHTML 
  setNextQuestion()
}

function btnOption2Clicked () {
  current_chosen_answer = btnOption2.innerHTML 
  setNextQuestion()
}

btnStart.addEventListener('click', btnStartCLicked)
btnOption1.addEventListener('click', btnOption1Clicked)
btnOption2.addEventListener('click', btnOption2Clicked)
