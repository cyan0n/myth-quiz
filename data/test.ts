export default {
  name: "Test",
  slug: "test",
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
      type: "truefalse",
      text: "True or False question",
      image: "chimera.jpg",
      answer: true,
    },
    {
      type: "sort",
      text: "Sorting question",
      order: ["Second", "First", "Fourth", "Third"],
      answer: ["First", "Second", "Third", "Fourth"],
    },
    {
      type: "sort",
      text: "Sorting question",
      order: ["Fourth", "Second", "Third", "First"],
      answer: ["First", "Second", "Third", "Fourth"],
    },
  ],
};
