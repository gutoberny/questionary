const quizData = [
    {
        question: 'Qual idade o Gustavo tem?',
        a: '23',
        b: '24',
        c: '25',
        d: '26',
        correct: 'd'
    },{
        question: 'Qual é a linguagem de programação mais usada em 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JS',
        correct: 'd'
    },{
        question: 'Quem é o Presidente dos USA',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },{
        question: 'Qual significado de HTML?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style',
        c: 'Jasoon Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },{
        question: 'Em que ano JS foi criado?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'Nenhuma das alternativas',
        correct: 'b'
    }
];

const quiz          = document.getElementById("quiz");
const answerEls     = document.querySelectorAll(".answer");
const questionEl    = document.getElementById('question');
const a_text        = document.getElementById('a_text');
const b_text        = document.getElementById('b_text');
const c_text        = document.getElementById('c_text');
const d_text        = document.getElementById('d_text');
const submitBtn     = document.getElementById('submit');

let currentQuiz = 0;
let score       = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText    = currentQuizData.question;
    a_text.innerText        = currentQuizData.a;
    b_text.innerText        = currentQuizData.b;
    c_text.innerText        = currentQuizData.c;
    d_text.innerText        = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
    
}

function deselectAnswers(){
    
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++; 
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>Você Respondeu corretamente ${score}/${quizData.length} questões!</h2>
            <button onclick="location.reload()">Refazer</button>
            `;
        }
    }
        
    getSelected();
})
