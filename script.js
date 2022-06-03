var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "Arrays in JavaScript can be used to store ____.",
        options: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above"
        ],
        answer: "all of the above"
      },
      {
        title:
          "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
];

var qIndex = 0;
var count = questions.length * 15;
var timeInterval;

//
var startbuttonEl = document.getElementById("start")
var questionEl = document.getElementById("question")
var questionTitleEl = document.getElementById("question-title")
var questionListEl = document.getElementById("question-list")
var timerEl = document.getElementById("count")
var checkAnswerEl = document.getElementById("check-answer")
var initialsEl = document.getElementById("initials")
var scoreEl = document.getElementById("score")
var submitCompleteQuizEl = document.getElementById("submit")



//Start Quiz
 function startQuiz(){
    var initialScreenEl = document.getElementById("startquiz");
    initialScreenEl.setAttribute("id", "hide");

    questionEl.removeAttribute("class");

    timerEl.textContent = count;
    timeInterval = setInterval(stopCountDown, 1000);

    showNextQuestion();
}



//Show Questions
 function showNextQuestion(){

    var questionOnScreen = questions[qIndex];
    
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = questionOnScreen.title;
    
    questionListEl.innerHTML = "";

    //loop through and show each question choice as a button
    questionOnScreen.options.forEach(function(choices, i){
        var questionOption = document.createElement("button");
        questionOption.setAttribute("class", "choices");
        questionOption.setAttribute("value", choices);
  
        questionOption.textContent = i + 1 + ". " + choices
  
        questionOption.onclick = checkAnswer;
  
        questionListEl.append(questionOption);

    })
}

// check the answer
function checkAnswer(){
    if(this.value !== questions[qIndex].answer ){
     
      count -= 10;
      if (count < 0) {
        count = 0;
      }
      timerEl.textContent = count;

      checkAnswerEl.textContent = "Wrong!";
    } else {
        checkAnswerEl.textContent = "Correct!";
       
    } 
    checkAnswerEl.setAttribute("class", "checkanswer");
    setTimeout(() => {
        checkAnswerEl.setAttribute("class", "checkanswer hide");
    }, 220);

    qIndex++

    if(questions.length === qIndex){
        stopQuiz();
    } else {
        showNextQuestion();
    }
  }

//Stop Quiz on timeout
function stopQuiz(){
    clearInterval(timeInterval);
    var finishScreenEl = document.getElementById("finish-screen")
    finishScreenEl.removeAttribute("class")
    //print final score
    scoreEl.textContent = count;
    //set hide class to question div
    questionEl.setAttribute("class", "hide")
}

//stop the timer
  function stopCountDown(){
    count--;
    timerEl.textContent = count;
        if(count <= 0){  
            stopQuiz();
        } 
  }
  
  //get high score
 function highScore(){
    var initials = initialsEl.value.trim()
    if(initials !== undefined){
        var scores = JSON.parse(localStorage.getItem("scores")) || [];
        var scoresArray = {
            score: count,
            initials: initials,
        }
         scores.push(scoresArray)
         localStorage.setItem("scores", JSON.stringify(scores))
  }
}

//click button to submit to local storage
 submitCompleteQuizEl.onclick = highScore;
//start the quiz
startbuttonEl.onclick = startQuiz;