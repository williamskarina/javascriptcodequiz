var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start-button');
var timeLeft = document.getElementById('timeLeft');
var currentQuestionIndex = "index";
startButton.addEventListener('click', startQuiz);

function questionIndex() {
    
}

function secondsLeft() {
    var timeRemaining = 60;

    var timeInterval = setInterval(function (){
        if (timeRemaining > 0) {
            timeLeft.textContent = timeRemaining + 'seconds remaining';
            timeRemaining--;
        }
    }, 1000);
}

function startQuiz() {
    secondsLeft();
    var questions = 
    [
      {
        question: "What does JS stand for?",
        choices: ["Javascript", "Just Studying", "John Stewart"],
        answer: 1
      },

      {
        question: "Is Javascript a programming language?",
        choices: ["Yes", "No"],
        answer: 1
      },

      {
        question: "What does NaN stand for?",
        choices: ["No Actual Number", "Not a Number", "False"],
        answer: 2
      },

      {
        question: "What is the purpose of an array",
        choices: ["to collect data", "to replace HTML", "to make a list of questions"],
        answer: 1
      }
      
      
    ];
}