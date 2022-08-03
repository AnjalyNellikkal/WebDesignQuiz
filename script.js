const quizData0 = [
    {
        question: "Which of the following HTML tag is the special formatting tag?",
        a: "<p>",
        b: "<b>",
        c: "<pre>",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following HTML tag is used to display the text with scrolling effect?",
        a: "<marquee>",
        b: "<scroll>",
        c: "<div>",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "<input> is -",
        a: "a format tag",
        b: "an empty tag",
        c: "All of the above",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "A program in HTML can be rendered and read by -",
        a: "Web browser",
        b: "Server",
        c: "Interpreter",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which HTML tag is used to display the power in expression, i.e., (x2 - y2)?",
        a: "<sup>",
        b: "<sub>",
        c: "<p>",
        d: "None of the above",
        correct: "a",
    },


];

const quizData1 = [
    {
        question: "Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: " JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level languaget",
        correct: "a",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: " It is an ordered list of string",
        d: "It is an ordered list of functions",
        correct: "a",
    },
    {
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        a: "A URL that uses the special javascript:code",
        b: "A URL that uses the special javascript:protocol",
        c: "A URL that uses the special javascript:encoding",
        d: "A URL that uses the special javascript:stack",
        correct: "b",
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "Function/Method",
        d: "RMI",
        correct: "c",
    },
    {
        question: "What is the basic difference between JavaScript and Java?",
        a: "Functions are considered as fields",
        b: "Functions are values",
        c: "There is no hard distinction between methods and fields",
        d: "Both b & c",
        correct: "d",
    },


];
const quizData2 = [
    {
        question: "Which of the following CSS property is used to set the background image of an element?",
        a: "background-attachment",
        b: "background-image",
        c: "background-color",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        a: "a {text-decoration : underline;}",
        b: "a {decoration : no-underline;}",
        c: "a {text-decoration : none;}",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        a: "padding",
        b: "padding-right",
        c: "padding-left",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Which of the following is the correct syntax to select all paragraph elements in a div element?",
        a: "div ~ p",
        b: "div#p",
        c: "p",
        d: "div p",
        correct: "d",
    },


];
const hScore =document.getElementById('score')
const answerEls = document.querySelectorAll('.btn-Answer')
const questionEl = document.getElementById('lbquestion')
const a_text = document.getElementById('lbAnswer1')
const b_text = document.getElementById('lbAnswer2')
const c_text = document.getElementById('lbAnswer3')
const d_text = document.getElementById('lbAnswer4')
const submitBtn = document.getElementById('btnNext')

let currentQuiz = 0
let score = 0
let quizData=quizData0;
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}
function selectTop3(){
    console.log("js")
    currentQuiz = 0
    score=0
    hScore.innerHTML = 'SCORE :'+score+'/5'
    quizData=quizData1;
    
    loadQuiz()

}
function selectTop2(){
    console.log("css")
    currentQuiz = 0
    score=0
    hScore.innerHTML = 'SCORE :'+score+'/5'
    quizData=quizData2;
    
    loadQuiz()

}
function selectTop1(){
    console.log("html")
    currentQuiz = 0
    score=0
    hScore.innerHTML = 'SCORE :'+score+'/5'
    quizData=quizData0;
    loadQuiz()

}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
    
}

document.getElementById('btnStart').addEventListener('click', () => {
    
    var pName=document.getElementById('partname').value;
    if(pName==''){
        document.getElementById("alert").style.display="inline"
    }
    else{
    document.getElementById('btnHtml').focus=true;
    document.getElementById('nameHead').innerHTML='HI '+pName
    document.getElementById('qBody').style.display="inline"
    document.getElementById('enterName').style.display="none"
    document.getElementById('btnHtml').disabled=false;
    document.getElementById('btnCss').disabled=false;
    document.getElementById('btnJs').disabled=false;
    }
    
})


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           console.log(score)
       }

       currentQuiz++
       

       if(currentQuiz < 5) {
           hScore.innerHTML = 'SCORE:'+score+'/5'
           loadQuiz()
       } else {
            hScore.innerHTML = 'SCORE :'+score+'/5'
          document.getElementById('question').innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>

          <button onclick="location.reload()"class="btn btn-primary btn-lg">RELOAD</button>
          ` 

       }
    }
})