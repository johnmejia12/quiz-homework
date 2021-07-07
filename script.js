var timeEl = document.querySelector("#time");
var highscoreEl = document.getElementById("highscore");
var secondsLeft = 180;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      highscore();
    }

  }, 1000);
}

function highscore() {
    

}


var questions = [
   
    {
        question: "what goes into a pb&j?", 
        answers: [
            "peanuts",
            "peanut butter",
            "ketchup",
            "chocolate"
    ],
        answer: "peanut butter",
        
    },

    {
        question: "Who was in the 98 bulls team?", 
        answers: [
            "Barney",
            "Power Rangers",
            "MJ",
            "Joe"
    ],
        answer: "MJ",
        
    },

    {
        question: "Who do people love?", 
        answers: [
            "soulmate",
            "mom",
            "dad",
            "Sosa"
    ],
        answer: "",
        
    },

    {
        question: "How long did this project take me to do?", 
        answers: [
            "1 hour",
            "5 hours",
            "8 hours",
            "30 hours"
    ],
        answer: "30 hours",
        
    }
];



var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var startbtn = document.getElementById("startButton");
var theQuestionsEl = document.getElementById("theQuestions")

function startGame() {
    document.getElementById("start").style.display = "none";
    startbtn.setAttribute = ("class", "hide");
    theQuestionsEl.removeAttribute("class");
    setTime();

}