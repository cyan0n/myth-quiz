export default {
  name: "Eros e Psiche",
  slug: "eros_psiche",
  image: "",
  quiz: [
    {
      type: "choice",
      text: "Di chi è figlio Eros?",
      choices: ["Cupido", "Venere", "Hercules", "Psiche"],
      answer: 1,
    },
    {
      type: "choice",
      text: "Per cosa era rinomata Psiche?",
      choices: ["Arguzia", "Carisma", "Intelligenza", "Bellezza"],
      answer: 3,
    },
    {
      type: "truefalse",
      text: "Psiche sfregia Eros?",
      answer: true,
    },
    {
      type: "sort",
      text: "Metti in ordine i seguenti eventi:",
      order: [
        "Venere è gelosa di Psiche",
        "Psiche viene presa da Zefiro",
        "Psiche illumina il volto di Eros",
        "Eros chiede al padre degli dei di essere ricongiunto con Psiche",
      ],
    },
    {
      type: "choice",
      text: "Quando si incontrano i due innamorati?",
      choices: ["Di mattina", "Happy Hour", "Di Notte", "Mai"],
      answer: 2,
    },
    {
      type: "choice",
      text: "In cosa sono dei campioni Michel e Sabatina?",
      choices: [
        "Litigio durante giochi da tavolo",
        "Cucinare sempre troppo cibo",
        "Essere in ritardo",
        "Tutte",
      ],
      answer: 3,
    },
  ],
};
