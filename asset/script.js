var quizdata =[
    {
        question: "Loops can execute a block of code as long as a specified condition______.",
        a: "1. is true",
        b: "2. is false",
        c: "3. is a string",
        d: "4. is a number",
        correct: a,
    }
    ,{
        question:  "The catch statement defines a code block ______ ",
        a: "1. to try",
        b: "2. to run",
        c: "3. to run regardless of the result",
        d: "4. to handle any error",
        correct: d,
    }
    ,{
        question: "Use else if to specify a new condition to test,______ ",
        a: "1. if the same condition is false ",
        b: "2. if a specified condition is true",
        c: "3. if the first condition is false",
        d: "4. if the first condition is true",
        correct: c,
    }
]
var container = document.querySelector('container');
var timeconatiner = document.querySelector('time-container');
var quiz = document.getElementById("quiz-container");
var answerEls = document.querySelectorAll('answer');
var questionEls = document.getElementById('question');
var a_text = document.getElementById('a');
var b_text = document.getElementById('b');
var c_text = document.getElementById('c');
var d_text = document.getElementById('d');

var startbtn = document.getElementById('start-btn');

var score = 0
var currentquiz= 0;
var timer = 100

loadquiz();

function loadquiz(){
    
    deselectAnswer();

    var currentquizdata = quizdata[currentquiz];
    questionEls.innerText = currentquizdata.question;
    a.innerText = currentquizdata.a
    b.innerText = currentquizdata.b
    c.innerText = currentquizdata.c
    d.innerText = currentquizdata.d
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getselected() {
    var answer
answerEls.forEach(answerEl => {
    if (answerEl.checked){
        answer = answerEl.id
    }
})
return answer;
}

getselected.addEventListener ('clisk ', answer =>{
     getselected()
    if (answer){
        if(answer === quizdata[currentquiz].correct){
            score++
        }
        currentquiz++

        if (currentquiz< quizdata.length) {
            loadquiz();
        }else {
            quiz.innerHTML = 
            <h2>You answered ${score}/${quizdata.length} questions correctly </h2>;

            <button onclick = "location.reload()">reload</button>

        }

    }
})

startQuiz.addEventListener ('click', function() {
    startQuiz();
})


function startQuiz() {
    clearInterval(container);
    quiz-Container.classList.add('show');
    getselected();
}