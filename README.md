# Quiz Multi-Matières

Un site de quiz moderne en HTML, CSS et JavaScript. Plusieurs sujets disponibles : Droit, Sciences, Physique, Chimie, Éco-Gestion, Informatique, Mathématiques, Lettres et Sport.

## Fonctionnalités

- 9 sujets avec questions et réponses
- Design moderne et responsive
- Sélection de sujet sur la page d'accueil
- Barre de progression, score en direct, feedback immédiat
- Génération automatique de propositions de réponses
- Animation de confetti pour les scores parfaits

## Lancer en local

```bash
# Ouvrir le fichier directement dans le navigateur
start index.html

# Ou avec un serveur local
npx serve .
```

## Déploiement sur Vercel

### 1. Pousser sur GitHub

```bash
git add .
git commit -m "Ajout du quiz multi-matieres"
git push origin main
```

### 2. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Clique sur **Add New Project**
3. Importe ton dépôt GitHub
4. Laisse les paramètres par défaut (framework preset : Other, output directory : `.`)
5. Clique sur **Deploy**

Le site sera en ligne en quelques secondes.

## Structure du projet

```
quiz-lettres-
├── index.html
├── style.css
├── script.js
├── package.json
├── .gitignore
└── README.md
```

## Personnaliser les questions

Ouvre `script.js` et modifie le tableau `quizData`. Chaque sujet contient un nom, une icône, une couleur et une liste de questions.

```js
{
  id: "physique",
  name: "Physique",
  icon: "⚡",
  color: "#fc4a1a",
  questions: [
    { q: "Ta question ?", a: "La réponse" },
    // ...
  ]
}
```
