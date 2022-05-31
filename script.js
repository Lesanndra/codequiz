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



var startbuttonEl = document.getElementById("start")
var questionEl = document.getElementById("question")
var questionTitleEl = document.getElementById("question-title")
var questionListEl = document.getElementById("question-list")


var count = 0


  function countDown(){


}



 function startQuiz(){
    var initialScreenEl = document.getElementById("initial-screen");
    initialScreenEl.setAttribute("class", "hide");

    document.getElementById("question").showQuestions();

    // questionEl.removeAttribute("");
   // document.getElementById("question").removeAttribute("width")

    showQuestions();
}



var qIndex = 0;

 function showQuestions(){
    var questionOnScreen = questions[qIndex];
    
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = questionOnScreen.title;
    
    questionListEl.innerHTML = "";
    var choices = questions[qIndex].options;
    var questionslength = questions.length;

  for (var i = 0; i < questionslength; i++){
      var questionOption = document.createElement("button");
      questionOption.setAttribute("class", "choices");
      questionOption.setAttribute("value", choices);

    
      questionOption.textContent = choices[i];

      //questionOption.onclick = 

      questionListEl.append(questionOption);
  }
}



//start the quiz
startbuttonEl.addEventListener("click", function(){
    showQuestions();
})