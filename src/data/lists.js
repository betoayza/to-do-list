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
    id: Date.now(),
    title: "List1",
    tasks: [
      {
        id: Date.now(),
        message: "Clean closet",
      },
      {
        id: Date.now(),
        message: "Dog walking",
      },
      {
        id: Date.now(),
        message: "Do shopping",
      },
    ],
    color: randomColor(),
  },
];
