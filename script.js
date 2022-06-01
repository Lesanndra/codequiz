

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
]

var qIndex = 0;
var count = questions.length * 3;
var timeInterval;


var startbuttonEl = document.getElementById("start")
var questionEl = document.getElementById("question")
var questionTitleEl = document.getElementById("question-title")
var questionListEl = document.getElementById("question-list")
var timerEl = document.getElementById("count")



 function startQuiz(){
    var initialScreenEl = document.getElementById("startquiz");
    initialScreenEl.setAttribute("id", "hide");

    questionEl.removeAttribute("class");

    timerEl.textContent = count;

    timeInterval = setInterval(countDown, 1000)

    showQuestions();
}



 function showQuestions(){

    var questionOnScreen = questions[qIndex];
    
    var questionTitle = document.getElementById("question-title");
   questionTitle.textContent = questionOnScreen.title;
    
    questionListEl.innerHTML = "";
    var choices = questions[qIndex].options;
    //var questionslength = questions.length;


    questionOnScreen.options.forEach((choices, i) => {
        var questionOption = document.createElement("button");
        questionOption.setAttribute("class", "choices");
        questionOption.setAttribute("value", choices);
  
        questionOption.textContent = i + 1 + ". " + choices
  
        questionOption.onclick = otherQuestions;
  
        questionListEl.append(questionOption);

    })
}

function otherQuestions(){
    if (this.value === questions[qIndex].answer){
        questions[qIndex]++
    }

}

function countDown(){
    count--;
    timerEl.textContent = count;
}


//start the quiz
startbuttonEl.onclick = startQuiz;