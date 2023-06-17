var treeAnsweres = {
  'واش تعلمتي شي حاجة ليوم': [
    {
      نعم: {
        'واش تبغي تشارك معانا': [
          { نعم: 'تقدر تبدا تكتب أفكارك وتنظمها' },
          { 'مكنعرفش نكتب': 'تقدر تبدا تقرا باش تعلم تكتب' }
        ]
      }
    },
    { لا: 'واش مهتم تعلم حوايج جداد' }
  ]
}

var buttonsFieldStart = document.getElementById('buttonsFieldStart')
var buttonsFieldsOptions = document.getElementById('buttonsFieldsOptions')
var btnStart = document.getElementById('btnStart')
var scoreArea = document.getElementById('scoreArea')
var btnOption1 = document.getElementById('btnOption1')
var btnOption2 = document.getElementById('btnOption2')

var current_question_index = 0

function setElementsVisible () {
  if (!buttonsFieldStart.classList.contains('invisible')) {
    buttonsFieldStart.classList.add('invisible')
  }
  if (buttonsFieldsOptions.classList.contains('invisible')) {
    buttonsFieldsOptions.classList.remove('invisible')
  }
  if (scoreArea.classList.contains('invisible')) {
    scoreArea.classList.remove('invisible')
  }
}

function setFirstQuestion () {
  question_got = Object.keys(treeAnsweres)[current_question_index]
  question_obj = treeAnsweres[question_got]
  for (let i = 0; i < question_obj.length; i++) {
    answer_got = Object.keys(question_obj[i])[0]
    switch (i) {
      case 0:
        btnOption1.innerHTML = answer_got
        break;
      case 1:
        btnOption2.innerHTML = answer_got 
        break;
    }
  } 
  questionField.innerHTML = question_got
}

function btnStartCLicked () {
  console.log('btnStart clicked')
  setElementsVisible()
  setFirstQuestion()
}

btnStart.addEventListener('click', btnStartCLicked)
