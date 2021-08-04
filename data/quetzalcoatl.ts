export default {
  name: "La leggenda del cacao",
  slug: "quetzacoatl",
  image: "",
  quiz: [
    {
      type: "sort",
      text: "Componi nell'ordine giusto il nome del Serpente Piumato",
      order: ["quetz", "al", "co", "atl"],
    },
    {
      type: "choice",
      text: "Come perse la fiducia degli uomini Quetzalcoatl?",
      choices: [
        "Come tutti: ubriacandosi",
        "Portando una pianta di cacao",
        "Facendo cadere semi in giro",
        "Lamentandosi del tempo",
      ],
      answer: 0,
    },
    {
      type: "choice",
      text: "Come si ubriacò Quetzalcoatl?",
      choices: [
        "Alla sagra di paese",
        "Brindando al ritorno di suo fratello",
        "Bevendo una cioccolata calda",
        "Bevendo un succo di pianta di agave",
      ],
      answer: 3,
    },
    {
      type: "Gli aztechi pensarono al ritorno di Quetzalcoatl nel 1519",
      text: "testo domanda",
      answer: true,
    },
    {
      type: "sort",
      text: "Componi nell'ordine giusto il nome del fratello del Serpente Piumato",
      order: ["tez", "cat", "lipo", "ca"],
    },
    {
      type: "truefalse",
      text: "Michel e Sabatina adorano le piante di agrumi",
      answer: true,
    },
  ],
};
