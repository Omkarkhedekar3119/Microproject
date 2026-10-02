function checkQuiz() {

let score = 0;

for(let i = 1; i <= 10; i++) {

let answer = document.querySelector('input[name="q' + i + '"]:checked');

if(answer && answer.value == "Correct") {
score++;
}
}
  
if(score == 10){
window.alert("Boom You Have Secured Full Marks!!!");
}

document.getElementById("result").innerHTML = "<b>Your Score : " + score + " / 10<b>";
}


