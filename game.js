const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"))

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the Javascript??",
        choice1: "<script>",
        choice2: "<Javascript>",
        choice3: "<js>",
        choice3: "<scripting>",
        answer: 1
    },
    {
        question: "what is the correct syntax for referring to an externsl script called 'xxx,js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write world in an alert box?",
        choice1: "msgBox('Hello world');",
        choice2: "alertBox('Hello world');",
        choice3: "msg('Hello world');",
        choice4: "alert('Hello world');",
        answer: 4
    }
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];
    console.log(avaliableQuestions);
    getNewQuestion();
};


getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionCounter >= MAX_QUESTION){
        //go to the end page
        return window.location.assign('/end.html');
    };
    questionCounter ++;
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    avaliableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;


};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) returns;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNewQuestion()

    })
}

)

startGame();