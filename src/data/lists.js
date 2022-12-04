let arrColors = [
  "#ffa07a",
  "#ff6347",
  "#d0ff14",
  "#ffcff1",
  "#7df9ff ",
  "#ffd700",
];

const randomColor = () => {
  let colorChosen = arrColors[Math.floor(Math.random() * 6)];
  return colorChosen;
};

export let dbLists = [
  {
    id: 1,
    title: "List1",
    tasks: [
      {
        id: 1,
        message: "Clean closet",
      },
      {
        id: 2,
        message: "Dog walking",
      },
      {
        id: 3,
        message: "Do shopping",
      },
    ],
    color: randomColor(),
  },
];
