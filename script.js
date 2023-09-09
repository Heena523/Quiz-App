const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["African Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au"],
        correctAnswer: "Au"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const questionElement = document.querySelector(".question");
const optionsElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElements.forEach((option, index) => {
        option.textContent = `Option ${String.fromCharCode(65 + index)}: ${currentQuestion.options[index]}`;
        option.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption.endsWith(currentQuestion.correctAnswer)) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Quiz completed
        questionContainer.style.display = "none";
        scoreContainer.style.display = "block";
        scoreElement.textContent = score;
    }
    event.currentTarget.style.backgroundColor = "lightgreen";
    optionsElements.forEach((option) => {
        option.style.cursor = "not-allowed";
        option.removeEventListener("click", checkAnswer);
    });
    nextButton.style.display = "block";
}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    loadQuestion();
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        optionsElements.forEach((option) => {
            option.style.backgroundColor = "#f0f0f0";
            option.style.cursor = "pointer";
        });
        nextButton.style.display = "none";
    } else {
        alert("Quiz completed!");
    }
});
