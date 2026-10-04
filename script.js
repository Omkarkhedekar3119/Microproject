function checkQuiz()
{
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');

    if(q1 && q1.value == "Correct")
        score++;

    if(q2 && q2.value == "Correct")
        score++;

    if(q3 && q3.value == "Correct")
        score++;

    if(q4 && q4.value == "Correct")
        score++;

    if(q5 && q5.value == "Correct")
        score++;

    if(q6 && q6.value == "Correct")
        score++;

    if(q7 && q7.value == "Correct")
        score++;

    if(q8 && q8.value == "Correct")
        score++;

    if(q9 && q9.value == "Correct")
        score++;

    if(q10 && q10.value == "Correct")
        score++;

   if(score == 10)
     window.alert("BOOM, You Have Secured Full Score!!!");

    document.getElementById("result").innerHTML =
        "<b>Your Score : " + score + " / 10</b>";
}

function reset(){
    document.getElementById("quiz").reset();
}
