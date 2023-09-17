const questions = 
[
    {
        question: "What is the capital city og Pakistan",
        answers: [
            {text: "Karachi", correct: false},
            {text: "Lahore", correct: false},
            {text: "Skardu", correct: false},
            {text: "Islamabad", correct: true},

        ]
    },
    {
        question: "What is the official language of Pakistan?",
        answers: [
            {text: "Urdu", correct: true},
            {text: "Punjabi", correct: false},
            {text: "Sindhi", correct: false},
            {text: "Pashto", correct: false},

        ]
    },
    {
        question: "Which mountain is the second-highest in the world?",
        answers: [
            {text: "Mount Nanga Parbat", correct: false},
            {text: "Mount Gasherbrum I", correct: false},
            {text: "Mount K1", correct: false},
            {text: "Mount K2", correct: true},

        ]
    },
    {
        question: " What is the name of the river that flows through the city of Lahore?",
        answers: [
            {text: "River Lahore", correct: false},
            {text: "River Indus", correct: false},
            {text: "River Ravi", correct: true},
            {text: "River Sutlej", correct: false},

        ]
    },
    {
        question: " Which famous ancient archaeological site is located in Sindh",
        answers: [
            {text: "Harappa", correct: false},
            {text: "Taxila", correct: false},
            {text: "Mohenjo-Daro", correct: true },
            {text: "Thatta", correct: false},

        ]
    },
    {
        question: "Approximately, how many languages are spoken in Pakistan?",
        answers: [
            {text: "20", correct: false},
            {text: "70", correct: true },
            {text: "50", correct: false},
            {text: "80", correct: false},

        ]
    },
    {
        question: "What is the currency of Pakistan?",
        answers: [
            { text: "Rupee", correct: true },
            { text: "Dollar", correct: false },
            { text: "Yen", correct: false },
            { text: "Euro", correct: false },
        ]
    },
    {
        question: "Which Pakistani scientist is known as the 'Father of the Nation's Nuclear Program'?",
        answers: [
            { text: "Dr. Abdul Qadeer Khan", correct: true },
            { text: "Dr. Atta-ur-Rahman", correct: false },
            { text: "Dr. Pervez Hoodbhoy", correct: false },
            { text: "Dr. Samar Mubarakmand", correct: false },
        ]
    },
    {
        question: "What is the highest mountain in Pakistan?",
        answers: [
            { text: "Mount Nanga Parbat", correct: true },
            { text: "Mount K2", correct: false },
            { text: "Mount Gasherbrum I", correct: false },
            { text: "Mount K1", correct: false },
        ]
    },
    {
        question: "Which province of Pakistan is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Punjab", correct: true },
            { text: "Sindh", correct: false },
            { text: "Balochistan", correct: false },
            { text: "Khyber Pakhtunkhwa", correct: false },
        ]
    },
    {
        question: "Who is the founder of Pakistan?",
        answers: [
            { text: "Allama Iqbal", correct: false },
            { text: "Liaquat Ali Khan", correct: false },
            { text: "Muhammad Ali Jinnah", correct: true },
            { text: "Zulfikar Ali Bhutto", correct: false },
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextBtn");

let curQI = 0;
let score = 0;

function startQuiz() {
    curQI = 0;
    score = 0;
    nextButton.innerText = "Next";
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[curQI];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn", "bg-green-500", "hover:bg-green-600", "text-white", "px-8", "py-3", "rounded-lg", "w-full");        button.addEventListener("click", () => checkAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    if (curQI < questions.length - 1) {
        curQI++;
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.innerText = `Your Score: ${score} out of ${questions.length}`;
    answerButtons.innerHTML = "";
    nextButton.innerText = "Restart";
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();
