export const pickUniqueNumbers = (count,max) => {
  let result = [];

  while (result.length < count) {
    let num = Math.floor(Math.random() * max);

    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};
