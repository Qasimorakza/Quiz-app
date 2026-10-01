

const quizData = [

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },

  {
    question: "Which language is used to style web pages?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    answer: 1
  },

  {
    question: "Which language is used to make web pages interactive?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    answer: 2
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "var",
      "define",
      "variable",
      "letvar"
    ],
    answer: 0
  },

  {
    question: "Which method is used to add an item to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: 0
  },

  {
    question: "Which method removes the last element from an array?",
    options: [
      "shift()",
      "remove()",
      "pop()",
      "delete()"
    ],
    answer: 2
  },

  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      "//",
      "/* */",
      "#",
      "<!-- -->"
    ],
    answer: 0
  },

  {
    question: "Which data type is used to store true or false?",
    options: [
      "String",
      "Boolean",
      "Number",
      "Object"
    ],
    answer: 1
  },

  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.convert()",
      "JSON.stringify()",
      "JSON.object()"
    ],
    answer: 2
  },

  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: 0
  },

  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    answer: 2
  },

  {
    question: "Which method is used to run a function for every element of an array?",
    options: [
      "map()",
      "forEach()",
      "filter()",
      "reduce()"
    ],
    answer: 1
  },

  {
    question: "Which method creates a new array by transforming every element?",
    options: [
      "forEach()",
      "map()",
      "push()",
      "find()"
    ],
    answer: 1
  },

  {
    question: "Which method is used to create a new array containing elements that pass a condition?",
    options: [
      "filter()",
      "map()",
      "reduce()",
      "forEach()"
    ],
    answer: 0
  },

  {
    question: "Which method is commonly used to calculate a single value from an array?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    answer: 2
  },

  {
    question: "Which method removes the first element from an array?",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ],
    answer: 2
  },

  {
    question: "Which method adds an element to the beginning of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: 3
  },

  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: [
      "function",
      "func",
      "define",
      "method"
    ],
    answer: 0
  },

  {
    question: "Which DOM method is used to select an element by its ID?",
    options: [
      "getElementById()",
      "getElementByClass()",
      "queryElement()",
      "selectById()"
    ],
    answer: 0
  },

  {
    question: "Which property is used to change the HTML content of an element?",
    options: [
      "innerHTML",
      "innerTextOnly",
      "htmlContent",
      "textHTML"
    ],
    answer: 0
  },

  {
    question: "Which method is used to add an event listener to an element?",
    options: [
      "addEvent()",
      "addEventListener()",
      "eventListener()",
      "listenEvent()"
    ],
    answer: 1
  },

  {
    question: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: [
      "const",
      "let",
      "varOnly",
      "static"
    ],
    answer: 1
  },

  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: [
      "let",
      "var",
      "const",
      "fixed"
    ],
    answer: 2
  },

  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Method",
      "Digital Object Management"
    ],
    answer: 0
  },

  {
    question: "Which method returns the first element that matches a CSS selector?",
    options: [
      "querySelector()",
      "querySelectorAll()",
      "getElement()",
      "selectFirst()"
    ],
    answer: 0
  }

];

//first page js is here

const startBtn = document.querySelector("#startbutton");


let quizDiv = document.querySelector(".quiz-div");
let firstDiv = document.querySelector(".first-page");
let footerDiv = document.querySelector(".footer-div");
let resultContainer = document.querySelector(".result-container");
let resultDiv = document.querySelector(".result-div");
let scoreElement = document.querySelector("#showScore");
let perCentageElement = document.querySelector("#percentageElement");
const restartBtn = document.getElementById("restart-btn");
const homeBtn = document.getElementById("homeBtn");

let questionContainer = document.querySelector(".question-container");
let question = document.querySelector(".question");
let answerDiv = document.querySelector(".answer");
let ongoingQuestion = document.querySelector(".ongoingQuestion");
let nextbutton = document.querySelector("#next-button")
let timer = document.querySelector(".time");

startBtn.addEventListener("click",(e) => {
   firstDiv.style.display = "none";
   quizDiv.style.display = "block";
   footerDiv.style.display = "block";
   document.body.style.backgroundColor = "#CCE2C2";
});

let totalQuestion = quizData.length;
let saveScore = 0;
let selectedanswer = null;
let indexOfCurrQuestion = 0;
let score  = 0;
let currentQuestion = quizData[indexOfCurrQuestion];


// function queTime(){

//   let currentTime = 30;
//   let downTime = setInterval(() =>{
//     timer.innerText = `00:${currentTime}`
//      currentTime--;
//     if(currentTime < 0){
//       const btn = document.querySelectorAll(".answer-btn");
//       btn[currentQuestion.answer].classList.add("correct");
        
     
//      clearInterval(downTime);
     
//     }     
//   },1000);

// }



function loadQuestions(){
  
     selectedanswer = null;
     nextbutton.disabled = true;
     currentQuestion = quizData[indexOfCurrQuestion]
    question.textContent = currentQuestion.question;
    ongoingQuestion.innerText = `${indexOfCurrQuestion + 1} / ${totalQuestion}`;
     
      answerDiv.innerHTML = '';
    currentQuestion.options.forEach((options, index) => { 
         let createButton = document.createElement("button");
        createButton.className = "answer-btn";
        createButton.innerHTML = ` ${options}`;
        answerDiv.append(createButton);
        
        createButton.addEventListener("click",(e) => {
           selectOptions(createButton, index) 
        
        });    
});
    
}



function selectOptions(clickButton,index){
    selectedanswer = index;
    nextbutton.disabled = false;
    const btn = document.querySelectorAll(".answer-btn");
    btn.forEach(btn => btn.classList.remove("selected"));
    clickButton.classList.add("selected");
}

function checkAnswer(){

     let  currentQuestion = quizData[indexOfCurrQuestion]
     const btn = document.querySelectorAll(".answer-btn");
      
      
     btn.forEach((btn) => btn.disabled = true);
       
     if(selectedanswer === currentQuestion.answer){
      btn[selectedanswer].classList.add("correct");
         score++;
        
     }
     else{
        btn[currentQuestion.answer].classList.add("correct");
      btn[selectedanswer].classList.add("wrong");
     }

   
}


function nextQuestion(){
   checkAnswer();
   indexOfCurrQuestion++;

   if(indexOfCurrQuestion < quizData.length){
     setTimeout(loadQuestions, 1000);
   }else{
    document.body.style.backgroundColor = "rgb(66, 66, 162)"; 
     questionContainer.style.display = "none";
    //  timer.style.display = "none";
    answerDiv.innerHTML = "";
    showResult();
    nextbutton.disabled = true;
   }
}

function showResult(){

   localStorage.setItem("Quizscore", score);
   saveScore = Number(localStorage.getItem("Quizscore")) || 0;

    let percentage = Math.round((saveScore / totalQuestion)  * 100);
    
    perCentageElement.innerText = `${percentage}${"%"}`;

    scoreElement.innerText = `${saveScore}/${totalQuestion}`;
    
  
    resultContainer.style.display = "block";   
    
    answerDiv.append(resultContainer);
    
  }

  function restartQuiz(){
     selectedanswer = null;
     indexOfCurrQuestion = 0;
     score = 0;
    questionContainer.style.display = "block";
    // timer.style.display = "block";
    document.body.style.backgroundColor = "#CCE2C2"
     loadQuestions();
     nextbutton.disabled = false;
  }

  nextbutton.addEventListener("click", nextQuestion);
    
   homeBtn.addEventListener("click",() => {
     window.location.reload(); 
  });

  restartBtn.addEventListener("click",() => {
    restartQuiz();
  });
      

loadQuestions();



