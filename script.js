let questionsObject = [
    {
        "question": "Wenn ich mich nicht entscheiden kann, esse ich eine Pizza...",
        "answer1" : "Margherita",
        "answer2" : "Margharita",
        "answer3" : "Margarita",
        "answer4" : "Margerita",
        "rightAnswer" : 1
    },
    {
        "question": "Und danach trinke ich eine...",
        "answer1" : "Margherita",
        "answer2" : "Margharita",
        "answer3" : "Margarita",
        "answer4" : "Margerita",
        "rightAnswer" : 3
    },
    {
        "question": "Filmzitat: Life is like a box of chocolates — you never know what you gonna get.",
        "answer1" : "La La Land",
        "answer2" : "Forrest Gump",
        "answer3" : "Cast Away",
        "answer4" : "The Green Mile",
        "rightAnswer" : 2
    },
    {
        "question": "Was ist die “Goldene Himbeere”?",
        "answer1" : "Ein Filmpreis",
        "answer2" : "Eine Nachspeise",
        "answer3" : "Ein Schmuckstück",
        "answer4" : "Das Symbol einer Sekte",
        "rightAnswer" : 1
    },
    {
        "question": "In welcher Stadt leben die Simpsons?",
        "answer1" : "New York",
        "answer2" : "Springfield",
        "answer3" : "Chicago",
        "answer4" : "Minnesota",
        "rightAnswer" : 2
    },
    {
        "question": "Wie viel Herzen hat ein Oktopus?",
        "answer1" : "2",
        "answer2" : "3",
        "answer3" : "4",
        "answer4" : "Keins",
        "rightAnswer" : 2
    }
];

let currentQuestion = 0; 
let rightAnswers = 0; 

function startQuiz() { 
    
    setTimeout(() => {
    generateQuestions(); 
    document.getElementById('wrapper-answers').classList.remove('d-none');
    document.getElementById('lets-go-btn').classList.add('d-none');
    document.getElementById('logo').classList.add('d-none');
    removeWibble(); 
    }, 500);      
}

function removeWibble() {
    document.getElementById('wibble').style.display = 'none';
}

function generateQuestions() {
    let question = questionsObject[currentQuestion]; 
    document.getElementById('answer1').innerHTML = question.answer1; 
    document.getElementById('answer2').innerHTML = question.answer2; 
    document.getElementById('answer3').innerHTML = question.answer3; 
    document.getElementById('answer4').innerHTML = question.answer4; 
    document.getElementById('question').innerHTML = question.question; 
}

function validate(selection) {
    disableAnswers(); 
    addOverlay(); 
    let question = questionsObject[currentQuestion];

    if ( selection == question['rightAnswer']) {
        document.getElementById(`answer${selection}`).innerHTML += `  &#128077;`;
        rightAnswers++; 
     }
     else {
         let rightAnswer = question['rightAnswer'];
         document.getElementById(`answer${rightAnswer}`).innerHTML += `   &#128077;`;
         document.getElementById(`answer${selection}`).innerHTML += `  &#128547 `;
     }   
     setTimeout(() => {
         showNextQuestionOrEndscreen(); 
     }, 1500); 
}

function showNextButton() {
    document.getElementById('next-btn').classList.remove('d-none');
}

function disableAnswers() {
    document.getElementById('answer1').classList.add('opacity05');
    document.getElementById('answer2').classList.add('opacity05');
    document.getElementById('answer3').classList.add('opacity05');
    document.getElementById('answer4').classList.add('opacity05');
}

function enableAnswers() {
    document.getElementById('answer1').classList.remove('opacity05');
    document.getElementById('answer2').classList.remove('opacity05');
    document.getElementById('answer3').classList.remove('opacity05');
    document.getElementById('answer4').classList.remove('opacity05');
}

function removeOverlay() {
    document.getElementById('overlay').classList.add('d-none');
}

function addOverlay() {
    document.getElementById('overlay').classList.remove('d-none');
}


function nextQuestion() {
    currentQuestion++; 
    enableAnswers(); 
    removeOverlay(); 
    setTimeout(() => {
        generateQuestions(); 
    }, 100);
}

function showNextQuestionOrEndscreen() {
    console.log( 'curent Question is' + currentQuestion)
    console.log(questionsObject.length)
    if( currentQuestion+1 >= questionsObject.length ) {
        generateEndScreen(); 
    }
    else {
        console.log('nächste frage'); 
        nextQuestion(); 
    }
}

function generateEndScreen() {
    document.getElementById('question').classList.add('d-none');
    document.getElementById('wrapper-answers').classList.add('d-none');
    document.getElementById('wrapper').classList.add('wrapperFormatEndscreen');
    document.getElementById('svg-wave').classList.remove('d-none');
    document.getElementById('svg-wave').style.display = 'block';
    document.getElementById('wrapper').innerHTML += `
    
        <div class="endscreen"> ${rightAnswers} von ${questionsObject.length} richtige Antworten <div>
        <button class="nochmal-btn" onclick="playAgain()">Noch mal versuchen</button>
    
        `;
}

function playAgain() {
    setTimeout(() => {
        window.location.reload(); 
    }, 1000);
}

