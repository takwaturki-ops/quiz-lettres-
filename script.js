const quizData = [
  {
    id: "droit",
    name: "Droit",
    icon: "⚖️",
    color: "#4e54c8",
    questions: [
      { q: "Que veut dire \"droit\" au sens général ?", a: "L'ensemble des règles qui organisent la vie en société." },
      { q: "Qu'est-ce qu'une loi ?", a: "Une règle écrite que tout le monde doit respecter." },
      { q: "Qui fait les lois dans un pays ?", a: "Le parlement (les députés)." },
      { q: "Qu'est-ce qu'un contrat ?", a: "Un accord entre deux personnes qui doivent le respecter." },
      { q: "Qu'est-ce qu'un droit ?", a: "Une liberté ou un avantage reconnu à une personne par la loi." },
      { q: "Qu'est-ce qu'un devoir (ou une obligation) ?", a: "Une chose qu'on est obligé de faire selon la loi." },
      { q: "Qui juge les personnes qui ont commis un crime ou un délit ?", a: "Le tribunal (le juge)." },
      { q: "Qu'est-ce qu'une personne physique ?", a: "Un être humain (toi, moi…)." },
      { q: "Qu'est-ce qu'une entreprise ?", a: "Une organisation qui produit des biens ou des services." },
      { q: "À partir de quel âge est-on majeur en Tunisie ?", a: "18 ans." },
      { q: "Que signifie \"illégal\" ?", a: "Contraire à la loi." },
      { q: "Qu'est-ce que la justice ?", a: "L'institution qui fait respecter les lois et règle les conflits." }
    ]
  },
  {
    id: "sciences",
    name: "Sciences",
    icon: "🔬",
    color: "#11998e",
    questions: [
      { q: "Quel organe est responsable de l'élimination des déchets du sang ?", a: "Les reins" },
      { q: "Quelle est l'unité fondamentale du vivant ?", a: "Cellule" },
      { q: "Combien de chromosomes possède normalement l'être humain ?", a: "46 chromosomes" },
      { q: "Comment s'appelle la division d'une cellule en deux cellules identiques ?", a: "La mitose." },
      { q: "Quel est le rôle principal de l'ADN ?", a: "Stocker l'information génétique." }
    ]
  },
  {
    id: "physique",
    name: "Physique",
    icon: "⚡",
    color: "#fc4a1a",
    questions: [
      { q: "Quelle est l'unité de la force dans le système international ?", a: "Newton" },
      { q: "Quelle est la vitesse de la lumière dans le vide ?", a: "Environ 300 000 km/s" },
      { q: "Quel phénomène explique la séparation de la lumière blanche en plusieurs couleurs ?", a: "La dispersion" },
      { q: "Quelle loi relie la tension, l'intensité et la résistance électrique ?", a: "La loi d'Ohm (U = R × I)" },
      { q: "Quelle force attire les objets vers la Terre ?", a: "La force de gravité" },
      { q: "Quelle énergie possède un objet en mouvement ?", a: "L'énergie cinétique" }
    ]
  },
  {
    id: "chimie",
    name: "Chimie",
    icon: "🧪",
    color: "#9d50bb",
    questions: [
      { q: "Quel est le pH d'une solution neutre à 25°C ?", a: "7" },
      { q: "Quelle particule porte une charge électrique négative ?", a: "L'électron" },
      { q: "Quel gaz est nécessaire à la combustion ?", a: "Le dioxygène (O₂)" },
      { q: "Quelle est la plus petite partie d'un élément chimique ?", a: "L'atome" },
      { q: "Quelle est la différence entre une transformation physique et chimique ?", a: "Une transformation chimique crée de nouvelles substances, une transformation physique change seulement l'état ou la forme." }
    ]
  },
  {
    id: "ecogest",
    name: "Éco-Gestion",
    icon: "📊",
    color: "#f7971e",
    questions: [
      { q: "Quelle est la différence entre croissance économique et développement économique ?", a: "La croissance concerne l'augmentation de la production, le développement concerne l'amélioration du bien-être de la population." },
      { q: "Qu'est-ce que la stratégie d'entreprise ?", a: "L'ensemble des décisions permettant d'atteindre ses objectifs à long terme." },
      { q: "Que signifie TVA ?", a: "Taxe sur la valeur ajoutée." },
      { q: "Qu'est-ce qu'un crédit ?", a: "Une somme d'argent prêtée par une banque." }
    ]
  },
  {
    id: "info",
    name: "Informatique",
    icon: "💻",
    color: "#2193b0",
    questions: [
      { q: "Que signifie HTML ?", a: "Langage utilisé pour créer la structure des pages web." },
      { q: "Que signifie CSS ?", a: "Langage utilisé pour la mise en forme des pages web." },
      { q: "Que signifie RAM ?", a: "La mémoire vive de l'ordinateur (mémoire temporaire)." },
      { q: "Que signifie CPU ?", a: "Le processeur, le \"cerveau\" de l'ordinateur." },
      { q: "Que signifie URL ?", a: "L'adresse d'une page web." },
      { q: "Qu'est-ce qu'un réseau informatique ?", a: "Un ensemble d'ordinateurs reliés entre eux pour échanger des données." },
      { q: "Que signifie WIFI ?", a: "Une technologie de connexion sans fil à internet." }
    ]
  },
  {
    id: "math",
    name: "Mathématiques",
    icon: "📐",
    color: "#ee0979",
    questions: [
      { q: "Quelle est la primitive de 1/x ?", a: "Ln|x| + C" },
      { q: "Que représente la dérivée d'une fonction en un point ?", a: "La pente de la tangente à la courbe en ce point." },
      { q: "Qu'est-ce qu'un extremum d'une fonction ?", a: "Un maximum ou un minimum." },
      { q: "Qu'est-ce qu'un nombre premier ?", a: "Un nombre qui possède exactement deux diviseurs : 1 et lui-même." },
      { q: "Quelle est la probabilité d'un événement impossible ?", a: "0" },
      { q: "Quelle est la probabilité d'un événement certain ?", a: "1" },
      { q: "Quelle est la formule de la suite géométrique de raison q ?", a: "Un = U0 × q^n" }
    ]
  },
  {
    id: "lettres",
    name: "Lettres",
    icon: "📚",
    color: "#6a11cb",
    questions: [
      { q: "Qui est l'auteur du \"Discours de la méthode\" ?", a: "René Descartes" },
      { q: "Qui a écrit \"Le Contrat social\" ?", a: "Jean-Jacques Rousseau" },
      { q: "Qui est l'auteur des \"Misérables\" ?", a: "Victor Hugo" },
      { q: "À quel mouvement littéraire appartient Victor Hugo ?", a: "Le romantisme" },
      { q: "Qui a écrit \"L'Étranger\" ?", a: "Albert Camus" },
      { q: "Quel siècle est appelé \"le siècle des Lumières\" ?", a: "Le XVIIIe siècle" },
      { q: "Quel est le plus long fleuve du monde ?", a: "Le Nil" },
      { q: "Quel est le plus grand désert du monde ?", a: "Le Sahara" }
    ]
  },
  {
    id: "sport",
    name: "Sport",
    icon: "🏃",
    color: "#38ef7d",
    questions: [
      { q: "Combien y a-t-il de muscles dans le corps humain (environ) ?", a: "Environ 600 muscles" },
      { q: "Quel est le rôle du cœur dans l'effort physique ?", a: "Pomper le sang pour apporter l'oxygène aux muscles." },
      { q: "Qu'est-ce que la fréquence cardiaque ?", a: "Le nombre de battements du cœur par minute." },
      { q: "Quel muscle permet la flexion du bras ?", a: "Le biceps" },
      { q: "Quel muscle permet l'extension du bras ?", a: "Le triceps" },
      { q: "Qu'est-ce que le système cardio-respiratoire ?", a: "L'ensemble formé par le cœur, les vaisseaux sanguins et les poumons." }
    ]
  }
];

const subjectScreen = document.getElementById("subject-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const subjectGrid = document.getElementById("subject-grid");
const subjectTitle = document.getElementById("subject-title");
const progressBar = document.getElementById("progress-bar");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreValue = document.getElementById("score-value");
const finalScore = document.getElementById("final-score");
const finalMessage = document.getElementById("final-message");
const restartBtn = document.getElementById("restart-btn");
const backBtn = document.getElementById("back-btn");
const homeBtn = document.getElementById("home-btn");
const confettiCanvas = document.getElementById("confetti");

let currentSubject = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function normalize(text) {
  return text.toLowerCase().replace(/[\s'’]/g, "").replace(/[\u00B2\u00B3]/g, "");
}

function renderSubjects() {
  subjectGrid.innerHTML = "";
  quizData.forEach((subject) => {
    const btn = document.createElement("button");
    btn.className = "subject-card";
    btn.style.setProperty("--subject-color", subject.color);
    btn.innerHTML = `
      <span class="subject-icon">${subject.icon}</span>
      <span class="subject-name">${subject.name}</span>
      <span class="subject-count">${subject.questions.length} questions</span>
    `;
    btn.addEventListener("click", () => startSubject(subject));
    subjectGrid.appendChild(btn);
  });
}

function startSubject(subject) {
  currentSubject = subject;
  questions = shuffle(subject.questions);
  currentIndex = 0;
  score = 0;
  answered = false;

  subjectTitle.textContent = `${subject.icon} ${subject.name}`;
  subjectScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  scoreValue.textContent = "0";
  showQuestion();
}

function showQuestion() {
  answered = false;
  const question = questions[currentIndex];
  const progress = ((currentIndex / questions.length) * 100).toFixed(0);
  progressBar.style.width = `${progress}%`;
  questionNumber.textContent = `Question ${currentIndex + 1} / ${questions.length}`;
  questionText.textContent = question.q;
  feedbackEl.textContent = "";
  feedbackEl.className = "";
  nextBtn.classList.add("hidden");
  scoreValue.textContent = score;

  const options = generateOptions(question);
  answersEl.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, option));
    answersEl.appendChild(btn);
  });
}

function generateOptions(question) {
  const correct = question.a;
  const sameSubjectAnswers = currentSubject.questions
    .map((q) => q.a)
    .filter((a) => normalize(a) !== normalize(correct));

  let wrongPool = sameSubjectAnswers.length >= 3
    ? sameSubjectAnswers
    : quizData.flatMap((s) => s.questions.map((q) => q.a)).filter((a) => normalize(a) !== normalize(correct));

  const wrongAnswers = shuffle(wrongPool).slice(0, 3);
  return shuffle([correct, ...wrongAnswers]);
}

function selectAnswer(btn, selected) {
  if (answered) return;
  answered = true;
  const question = questions[currentIndex];
  const correct = question.a;
  const buttons = answersEl.querySelectorAll(".answer-btn");

  buttons.forEach((b) => {
    b.disabled = true;
    if (normalize(b.textContent) === normalize(correct)) {
      b.classList.add("correct");
    } else if (b === btn) {
      b.classList.add("wrong");
    }
  });

  if (normalize(selected) === normalize(correct)) {
    score++;
    scoreValue.textContent = score;
    feedbackEl.textContent = "✅ Bonne réponse !";
    feedbackEl.className = "correct";
  } else {
    feedbackEl.textContent = `❌ Mauvaise réponse. La bonne réponse était : ${correct}`;
    feedbackEl.className = "wrong";
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressBar.style.width = "100%";
  finalScore.textContent = `${score} / ${questions.length}`;

  const percentage = (score / questions.length) * 100;
  if (percentage === 100) {
    finalMessage.textContent = "🌟 Parfait ! Tu maîtrises ce sujet.";
    startConfetti();
  } else if (percentage >= 70) {
    finalMessage.textContent = "🎉 Très bien ! Continue comme ça.";
  } else if (percentage >= 50) {
    finalMessage.textContent = "👍 Pas mal, mais tu peux encore progresser.";
  } else {
    finalMessage.textContent = "📚 Encore un peu de révision et ça sera bon !";
  }
}

function goHome() {
  stopConfetti();
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  subjectScreen.classList.remove("hidden");
}

function startConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCanvas.classList.remove("hidden");

  const pieces = [];
  const colors = ["#667eea", "#764ba2", "#f7971e", "#38ef7d", "#ee0979", "#2193b0"];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360
    });
  }

  let animationId;
  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    pieces.forEach((p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      p.y += p.speed;
      p.angle += 2;
      if (p.y > confettiCanvas.height) {
        p.y = -p.size;
        p.x = Math.random() * confettiCanvas.width;
      }
    });
    confettiCanvas.dataset.animationId = requestAnimationFrame(draw);
  }

  draw();
}

function stopConfetti() {
  const id = confettiCanvas.dataset.animationId;
  if (id) cancelAnimationFrame(Number(id));
  confettiCanvas.classList.add("hidden");
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => startSubject(currentSubject));
backBtn.addEventListener("click", goHome);
homeBtn.addEventListener("click", goHome);

window.addEventListener("resize", () => {
  if (!confettiCanvas.classList.contains("hidden")) {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
});

renderSubjects();
