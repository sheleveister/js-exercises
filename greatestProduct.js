// найти наибольшее произведение из 5ти последовательных цифр

const MAX_LENGTH = 5;

function greatestProduct(input) {
  let arrWithNumbers = [];

  for (let i = 0; i < input.length; i++) {
    let number = "";
    number = input.substring(i, MAX_LENGTH + i);
    arrWithNumbers.push(number);
  }

  arrWithNumbers = arrWithNumbers
    .filter(num => num.length === MAX_LENGTH)
    .map(num => {
      return [...num].reduce((acc, item) => {
        acc *= item;
        return acc;
      }, 1)
    });

  return Math.max(...arrWithNumbers);
}

console.log(greatestProduct("123834539327238239583"));
