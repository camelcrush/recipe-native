export const shuffleArray = (inputArray) => {
  return inputArray.slice().sort(() => Math.random() - 0.5);
};
