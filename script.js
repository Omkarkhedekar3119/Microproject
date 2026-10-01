function checkQuiz() {

let score = 0;

for(let i = 1; i <= 10; i++) {

let answer = document.querySelector('input[name="q' + i + '"]:checked');

if(answer && answer.value == "Correct") {
score++;
}

}

document.getElementById("result").innerHTML = "<b>Your Score : " + score + " / 10<b>";

}