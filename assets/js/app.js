
var buttonsFieldStart = document.getElementById("buttonsFieldStart");
var buttonsFieldsOptions = document.getElementById("buttonsFieldsOptions"); 
var btnStart = document.getElementById("btnStart")
var scoreArea = document.getElementById("scoreArea")

function btnStartCLicked(){
    console.log("btnStart clicked")

    if (!buttonsFieldStart.classList.contains("invisible")){
        buttonsFieldStart.classList.add("invisible");
    }
    if (buttonsFieldsOptions.classList.contains("invisible")){
        buttonsFieldsOptions.classList.remove("invisible");
    }
    if (scoreArea.classList.contains("invisible")){
        scoreArea.classList.remove("invisible");
    }

}



btnStart.addEventListener("click", btnStartCLicked);

