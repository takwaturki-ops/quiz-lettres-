const questions = [
  {
    question: "Qui est l’auteur du \"Discours de la méthode\" ?",
    answer: "René Descartes"
  },
  {
    question: "Qui a écrit \"Le Contrat social\" ?",
    answer: "Jean-Jacques Rousseau"
  },
  {
    question: "Qui est l’auteur des \"Misérables\" ?",
    answer: "Victor Hugo"
  },
  {
    question: "À quel mouvement littéraire appartient Victor Hugo ?",
    answer: "Le romantisme"
  },
  {
    question: "Qui a écrit \"L’Étranger\" ?",
    answer: "Albert Camus"
  },
  {
    question: "Quel siècle est appelé \"le siècle des Lumières\" ?",
    answer: "Le XVIIIe siècle"
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    answer: "Le Nil"
  },
  {
    question: "Quel est le plus grand désert du monde ?",
    answer: "Le Sahara"
  }
];

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const scoreValueEl = document.getElementById("score-value");
const quizEl = document.getElementById("quiz");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function shuffle(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = shuffle(questions);
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  scoreValueEl.textContent = score;
  showQuestion();
}

function getAnswerOptions(correctAnswer) {
  const allAnswers = questions.map((q) => q.answer);
  const wrongAnswers = allAnswers.filter((a) => a !== correctAnswer);
  const selectedWrong = shuffle(wrongAnswers).slice(0, 3);
  return shuffle([correctAnswer, ...selectedWrong]);
}

function showQuestion() {
  const question = shuffledQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
  questionTextEl.textContent = question.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "";
  nextBtn.classList.add("hidden");
  answersEl.innerHTML = "";

  const options = getAnswerOptions(question.answer);
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, option));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, selectedAnswer) {
  const question = shuffledQuestions[currentQuestionIndex];
  const buttons = answersEl.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === question.answer) {
      btn.classList.add("correct");
    } else if (btn === selectedBtn) {
      btn.classList.add("wrong");
    }
  });

  if (selectedAnswer === question.answer) {
    score++;
    scoreValueEl.textContent = score;
    feedbackEl.textContent = "Bonne réponse !";
    feedbackEl.classList.add("correct");
  } else {
    feedbackEl.textContent = `Mauvaise réponse. La bonne réponse était : ${question.answer}`;
    feedbackEl.classList.add("wrong");
  }

  nextBtn.classList.remove("hidden");
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `Votre score : ${score} / ${shuffledQuestions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", startQuiz);

startQuiz();
