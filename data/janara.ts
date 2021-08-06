export default {
  name: "La Janara",
  slug: "janara",
  image: "",
  quiz: [
    {
      type: "choice",
      text: "Perché esce di notte la Janara?",
      choices: [
        "Perché è troppo brutta per la luce del sole",
        "Sta antipatica a tutti",
        "Per contare grani di sale",
        "Fare trecce a cavalli",
      ],
      answer: 3,
    },
    {
      type: "choice",
      text: "Ch' tien'n man'?",
      choices: [
        "fierr' e scop'migli",
        "fierr' e pugn",
        "fieer' e acciai",
        "fierr' e acciaij",
      ],
      answer: 3,
    },
    {
      type: "choice",
      text: "Cos’è una Janara?",
      choices: [
        "Una sacerdotessa",
        "Una porta",
        "Una strega",
        "Una scopa di miglio",
      ],
      answer: 2,
    },
    {
      type: "truefalse",
      text: "Se la Janara ti si sdraia sul petto la tua casa sarà protetta",
      answer: false,
    },
    {
      type: "sort",
      text: "Metti in ordine, dalla più potente alla meno, le cose che sconfiggono una Janara",
      order: [
        "Luce del sole",
        "fierr' e acciaij",
        "Scopa di miglio capovolta e grani di sale",
        "La consapevolezza di essere una strega",
      ],
      answer: [
        "Luce del sole",
        "Scopa di miglio capovolta e grani di sale",
        "fierr' e acciaij",
        "La consapevolezza di essere una strega",
      ],
    },
    {
      type: "truefalse",
      text: "Michel e Sabatina hanno rimandato il matrimonio 3 volte",
      answer: false,
    },
  ],
};
