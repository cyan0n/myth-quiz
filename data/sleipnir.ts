export default {
  name: "La nascita di Sleipnir",
  slug: "sleipnir",
  image: "",
  quiz: [
    {
      type: "choice",
      text: "Chi è Sleipnir?",
      choices: [
        "un cavallo nero",
        "un cavallo con 6 zampe",
        "il figlio di Loki",
        "Svadilfari",
      ],
      answer: 2,
    },
    {
      type: "truefalse",
      text: "Il mastro muratore avrebbe fatto il muro in tre anni",
      answer: false,
    },
    {
      type: "choice",
      text: "Cosa voleva il mastro muratore per costruire le mura?",
      choices: ["Thor", "Odino", "Freya", "Svaldilfari"],
      answer: 2,
    },
    {
      type: "sort",
      text: "Metti in ordine gli eventi",
      order: [
        "Odino vuole in dono il cavallo",
        "Svadilfari scappa per amore",
        "Tutti danno la colpa a Loki",
        "Asgard ha bisogno di difese",
      ],
      answer: [
        "Asgard ha bisogno di difese",
        "Tutti danno la colpa a Loki",
        "Svadilfari scappa per amore",
        "Odino vuole in dono il cavallo",
      ],
    },
    {
      type: "choice",
      text: "Perché Thor uccide il muratore?",
      choices: [
        "Perché Thor è pazzo",
        "Perché fa scappare il cavallo",
        "Perché è un gigante",
        "Perché è un muratore",
      ],
      answer: 2,
    },
    {
      type: "truefalse",
      text: "Michel e Sabatina festeggiano l'anniversario a settembre",
      answer: false,
    },
  ],
};
