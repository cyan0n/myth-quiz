export default {
  name: "'O Munaciello",
  slug: "o_munaciello",
  image: "",
  quiz: [
    {
      type: "choice",
      text: "Di chi è figlio lu munaciello?",
      choices: [
        "Caterina Frezzi e Stefano Mariconda",
        "Caterina Frezzu e Stefano Maricondu",
        "Caterina Frezz e Stefano Mariconda",
        "Caterina Frezza e Stefano Mariconda",
      ],
      answer: 3,
    },
    {
      type: "choice",
      text: "Come si veste lu munaciello?",
      choices: [
        "Da prete povero",
        "Male",
        "Saio e fibbie di argento sulle scarpe",
        "Da monaco",
      ],
      answer: 2,
    },
    {
      type: "truefalse",
      text: "Per scacciare lu munaciello bisogna rivelarne la presenza",
      answer: false,
    },
    {
      type: "sort",
      text: "Ricomponi il proverbio:",
      order: ["a chi arricchisce", "a chi appezzentisce", "e", "O Munaciello:"],
      answer: [
        "O Munaciello:",
        "a chi arricchisce",
        "e",
        "a chi appezzentisce",
      ],
    },
    {
      type: "choice",
      text: "Cosa fa lu munaciello?",
      choices: [
        "Fischia nelle orecchie di chi dorme",
        "Apprezza i bei bambini",
        "Nasconde oggetti",
        "Lascia monete in mano alla gente",
      ],
      answer: 2,
    },
    {
      type: "choice",
      text: "Quante piante di Calistemo hanno Michel e Sabatina?",
      choices: ["2", "0", "il Calistemo non è una pianta", "Calispera"],
      answer: 0,
    },
  ],
};
