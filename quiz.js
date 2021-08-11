
  var heading = document.getElementById('heading');
  let getName = localStorage.getItem('localName');
  let getFbName = localStorage.getItem('fbName');
  heading.innerHTML=`${getFbName || getName}`;

let quizQuestions = [
    {
        question : "Q1:What does HTML stand for?",
    
        a : "Hyper Text Markup Language",
    
        b : "How to Make Lasagna",
    
        c : "Hot Mail",
    
        d :"None of the Above",
    
        answer: "ans1"
    },
    
    
    {
        question : "Q2:< br  / > What type of tag is this?",
    
        a : "Closing tag",
    
        b : "Opening tag",
    
        c : "Break tag",
    
        d :"None of the Above",
    
        answer: "ans3"
    },
    
    {
    question : "Q3:JS stands for:",
    
        a : "Javasource",
    
        b : "Javascript",
    
        c : "javasolar",
    
        d :"None of the Above",
    
        answer: "ans2"
    },
    
    {
        question : "Q4:Which of the following selector matches all elements of a type?",
    
        a : "The Type Selector",
    
        b : "The Universal Selector",
    
        c : "The Class Selector",
    
        d :"None of the Above",
    
        answer: "ans1"
    },
    
    {
        question : "Q5:Which of the following property is used to control the repetition of an image in the background?",
    
        a : "background-color",
    
        b : "background-position",
    
        c : "background-repeat",
    
        d :"background-image",
    
        answer: "ans3"
    },
    {
        question : "Q6: Which of the following property is used to set the height of an image?",
    
        a : "border",
    
        b : "height",
    
        c : "width",
    
        d :"None of the above",
    
        answer: "ans2"
    },
    {
        question : "Q7:If we want define style for an unique element, then which css selector will we use ?",
    
        a : "Id",
    
        b : "Class",
    
        c : "Text",
    
        d :"Name",
    
        answer: "ans1"
    },
    {
        question : "Q8:What does the a stand for in RGBa??",
    
        a : "Alpha",
    
        b : "Apple",
    
        c : "About",
    
        d :"Aqua",
    
        answer: "ans3"
    },

    {
        question : "Q9:If you type the following code in the console window, what result will you get?  3 > 2 > 1 === false;",
    
        a : "True",
    
        b : "False",
    
        c : "Null",
    
        d :"Nan",
    
        answer: "ans1"
    },

    {
        question : "Q10:JavaScript is a ___ -side programming language.",
    
        a : "Client",
    
        b : "Server",
    
        c : "Both",
    
        d :"None",
    
        answer: "ans3"
    },
    {
        question : "Q11:Which JavaScript label catches all the values, except for the ones specified?",
    
        a : "Catch",
    
        b : "Label",
    
        c : "Try",
    
        d :"Default",
    
        answer: "ans4"
    },
    {
        question : "Q12:What will the code return? Boolean(3 < 7)",
    
        a : "True",
    
        b : "False",
    
        c : "Syntax Error",
    
        d :"Nan",
    
        answer: "ans1"
    },
    {
        question : "Q13:JavaScript File Has An Extension of:",
    
        a : ".java",
    
        b : ".xml",
    
        c : ".xl",
    
        d :".js",
    
        answer: "ans4"
    },
    {
        question : "Q14:Inside which HTML element do we put the JavaScript?",
    
        a : "Scripting",
    
        b : "Script",
    
        c : "JS",
    
        d :"JavaScirpt",
    
        answer: "ans2"
    },
    {
        question : "Q15: Which built-in method removes the last element from an array and returns that element?",
    
        a : "last()",
    
        b : "push()",
    
        c : "remove()",
    
        d :"pop()",
    
        answer: "asn4"
    },
    {
        question : "Q16:Which method will you use to round the number to the nearest integer?",
    
        a : "round",
    
        b : "rnd",
    
        c : "Math.round",
    
        d :"Math.rnd",
    
        answer: "asn3"
    },
    {
        question : "Q17:Which of the following statements will show a message as well as ask for user input in a popup?",
    
        a : "prompt()",
    
        b : "alert()",
    
        c : "message()",
    
        d :"confirm()",
    
        answer: "ans1"
    },
    {
        question : "Q18:Which of the given options is an incorrect variable name?",
    
        a : "avaScript",
    
        b : "_javascript",
    
        c : "-javascipt",
    
        d :"$javascript",
    
        answer: "ans3"
    },
    {
        question : "Q19:Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
    
        a : "concat()",
    
        b : "new()",
    
        c : "merge()",
    
        d :"some()",
    
        answer: "ans1"
    },

    {
        question : "Q20:Which of the following function of String object returns the capitalized string while respecting the current locale?",
    
        a : "toLocalCase()",
    
        b : "toUpperCase()",
    
        c : "toCapital()",
    
        d :"toString()",
    
        answer: "ans2"
    },

    ];



    
let question = document.getElementById('question');
let option1 = document.getElementById('opt1');
let option2 = document.getElementById('opt2');
let option3 = document.getElementById('opt3');
let option4 = document.getElementById('opt4');

let show = document.getElementById('show');


let answers = document.getElementsByName('answers');

let changing_submit = document.getElementById('submit');



let quizCount = 0;

let score = 0;

let loadQuestion = ()=>{
      question.innerText = quizQuestions[quizCount].question;
      option1.innerText = quizQuestions[quizCount].a;
      option2.innerText = quizQuestions[quizCount].b;
      option3.innerText = quizQuestions[quizCount].c;
      option4.innerText = quizQuestions[quizCount].d;

}

loadQuestion();
start();


let checkedAnswer = ()=>{
    let answer;
     answers.forEach((CurrentAnswer)=>{
            if(CurrentAnswer.checked){
                   answer = CurrentAnswer.id;
            }
     })
   return answer;
}

let deselect = ()=>{
    answers.forEach((CurrentAnswer) =>CurrentAnswer.checked = false)
}


let submit = ()=>{
    answer = checkedAnswer();
    // console.log(answer)

    if(answer === quizQuestions[quizCount].answer){

        score++;
         localStorage.setItem('score',score)
         
    }
    quizCount++;


    if(quizCount < quizQuestions.length){
            

        loadQuestion();
        deselect();
        
    }
    else{
        window.location.href = 'result.html';
    }

  
       
    if(quizQuestions.length-1 == quizCount){
        changing_submit.innerText = 'SUBMIT'
        changing_submit.className = "btn btn-primary"

    }
        
}

let localQuizQuestions = localStorage.setItem('localQuizQuestions',quizQuestions.length)





var min = 4;
var sec = 59;
var msec = 100;

var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var milli = document.getElementById("msec");
var inter;
var dis;

function start(){
    inter = setInterval(function(){
        msec--;
        milli.innerHTML = msec;
        if(msec <=0){
            msec = 100;
            sec--;
            seconds.innerHTML = sec;
        }
        else if(sec <=0){
            sec = 60;
            min--;
            minutes.innerHTML = min;
        }
    },10)
}



 setTimeout(function(){
     let obj = {
        name: localStorage.getItem('localName'),
           fbName : localStorage.getItem('fbName'),
        score: localStorage.getItem('score')
      }  
      var key = Math.random()*10000
      firebase.database().ref('Score'+key.toFixed()).push(obj)
     
      let getTimeScore = document.getElementById('resultScore').value;

      getTimeScore.innerHTML = `Your Score:  ${localStorage.getItem('score')} / ${getQuesionLength}`
 


 },294000)

 setTimeout(function(){ 
    clearInterval(inter)
    window.location.href = ('result.html')

 }, 300000);


