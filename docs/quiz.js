export default [
  {
    name: "Chimera",
    image: "chimera.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    quiz: [
      {
        type: "choice",
        text: "Multiple choice question",
        choices: ["Answer 0", "Answer 1", "Answer 2", "Answer 3"],
        answer: 3,
      },
      {
        type: "truefalse",
        text: "True or False question",
        image: "chimera.jpg",
        answer: true,
      },
      {
        type: "sort",
        text: "Sorting question",
        order: ["First", "Second", "Third", "Fourth"],
      },
    ],
  },
];
